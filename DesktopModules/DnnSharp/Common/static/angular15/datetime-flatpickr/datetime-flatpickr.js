;

/**
 * @typedef {{ time: string, timeWithSeconds: string, timeSpan: string, timeSpanWithSeconds: string, date: string, dateTime: string, dateTimeWithMilliseconds: string }} IsoFormats
 */

(function (angular) {

    angular.module("datetimeflatpickr", [])
        .directive("datetimeflatpickr", ["$timeout", function ($timeout) {
            return {
                restrict: "A",
                require: "ngModel",
                scope: {
                    ngModel: "=",
                    updateField: "&",
                    registerControl: "&",
                    moduleId: "@",
                    field: "=",
                    form: "=",
                    isoFormats: "@",
                    clientFormat: "@",
                    afMinDate: "@",
                    afMaxDate: "@",
                    afMinTime: "@",
                    afMaxTime: "@",
                },
                link: {
                    post: function (scope, element, attrs, ctrl) {
                        var params = scope.field.Parameters;

                        /**
                         * @type {IsoFormats}
                         */
                        var isoFormats = JSON.parse(scope.isoFormats);

                        scope.registerControl({
                            control: {
                                field: scope.field,
                                onSubmit: function (fnCallWhenDone, fnCallOnError) {
                                    fnCallWhenDone && fnCallWhenDone();
                                },
                                getValue: function () {
                                    if (params.PickerType.Value !== "time" || !scope.fpInstance.selectedDates.length) { return scope.ngModel; }
                                    return transformTimeToUtc(scope.fpInstance.selectedDates[0], isoFormats.time);
                                }
                            }
                        });

                        var dateFormat = "";
                        switch (params.PickerType.Value) {
                            case "date": {
                                dateFormat = isoFormats.date;
                                break;
                            }
                            case "time": {
                                dateFormat = isoFormats.time;
                                break;
                            }
                            default: {
                                dateFormat = isoFormats.dateTime;
                            }
                        }

                        try {
                            var validatedParams = validateParameters(scope.field, params, isoFormats, scope);
                        } catch (e) {
                            $("#" + scope.field.TitleCompacted + "-" + scope.moduleId).text(e.toString());
                            element.prop('disabled', true);
                            console.error(e.toString());
                            return;
                        };

                        var flatpickrHardcodedFormats = {
                            "H:i:S": isoFormats.timeWithSeconds,
                            "H:i": isoFormats.time,
                            "Y-m-d": isoFormats.date,
                            "Y-m-d\\TH:i:S": isoFormats.date + "'T'" + isoFormats.timeWithSeconds, // we can't use isoFormats.dateTimeFormat because we do not want the offset part (K).
                        };

                        var options = createFlatPickrOptions(validatedParams, dateFormat, flatpickrHardcodedFormats, scope);

                        // init
                        scope.fpInstance = element.flatpickr(options);

                        attrs.$observe("disabled", function (value) {
                            if (value) {
                                scope.fpInstance._input.setAttribute('disabled', 'disabled')
                            } else {
                                scope.fpInstance._input.removeAttribute('disabled')

                            }
                        });

                    }
                }
            };
        }
        ]);

    /**
     * 
     * @param {Date} utcTimeWithOffset
     * @param {string} isoTimeFormat
     * @returns {string}
     */
    function transformTimeToUtc(selectedDate, isoTimeFormat) {
        var offsetMilliseconds = selectedDate.getTimezoneOffset() * 60000;
        var utcTime = selectedDate.valueOf() + offsetMilliseconds;
        return window.dnnsfDateFns.formatMs(new Date(utcTime), isoTimeFormat, new Date());
    }

    /**
     * 
     * @param {Date|string} dirtyDate 
     * @param {string} format 
     * @returns {Date}
     */
    function parseDate(dirtyDate, format) {
        if (dirtyDate === "today") {
            return new Date();
        }
        return window.dnnsfDateFns.parseMs(dirtyDate, format, new Date());
    }

    /**
     * 
     * @param {Date|string} dirtyDate 
     * @param {string[]} formats 
     * @returns {Date}
     */
    function parseDateAny(dirtyDate, formats) {
        if (!Array.isArray(formats)) {
            throw new Error("Argument Exception: 'formats' argument must be string[].");
        }

        for (var i = 0; i < formats.length; i++) {
            var parsedDate = parseDate(dirtyDate, formats[i]);
            if (!isNaN(parsedDate)) {
                return parsedDate;
            }
        }

        return new Date("ff"); // this is an "Invalid Date".
    }

    /**
     * 
     * @param {Date|string} dirtyDate 
     * @param {string} format 
     * @returns {Date}
     */
    function parseTime(dirtyTime, format) {
        return window.dnnsfDateFns.parseMsTimeSpan(dirtyTime, format, new Date());
    }

    /**
     * 
     * @param {Date|string} dirtyDate 
     * @param {string[]} formats
     * @returns {Date}
     */
    function parseTimeAny(dirtyDate, formats) {
        if (!Array.isArray(formats)) {
            throw new Error("Argument Exception: 'formats' argument must be string[].");
        }

        for (var i = 0; i < formats.length; i++) {
            var parsedDate = parseTime(dirtyDate, formats[i]);
            if (!isNaN(parsedDate)) {
                return parsedDate;
            }
        }

        return new Date("ff"); // this is an "Invalid Date".
    }

    /**
     * 
     * @param {*} field 
     * @param {*} params 
     * @param {IsoFormats} isoFormats 
     * @param {*} scope 
     */
    function validateParameters(field, params, isoFormats, scope) {
        var paramsCopy = JSON.parse(JSON.stringify(params));
        var parsedTemp;
        if (paramsCopy.PickerType.Value !== "time") {
            if (scope.afMaxDate) {
                parsedTemp = parseDate(scope.afMaxDate, isoFormats.date)
                if (!isNaN(parsedTemp)) {
                    paramsCopy.MaxDate = parsedTemp;
                } else {
                    throw new DateTimePickerException("Maximum Date is an invalid date string", field.Title);
                }
            }

            if (scope.afMinDate) {
                parsedTemp = parseDate(scope.afMinDate, isoFormats.date);
                if (!isNaN(parsedTemp)) {
                    paramsCopy.MinDate = parsedTemp;
                } else {
                    throw new DateTimePickerException("Minimum Date is an invalid date string", field.Title);
                }
            }
        } else {
            paramsCopy.MaxDate = paramsCopy.MinDate = "";
        }

        if (paramsCopy.PickerType.Value !== "date") {
            if (scope.afMaxTime) {
                parsedTemp = parseTimeAny(scope.afMaxTime, [isoFormats.timeSpan, isoFormats.timeSpanWithSeconds])
                if (!isNaN(parsedTemp)) {
                    paramsCopy.MaxTime = parsedTemp;
                } else {
                    throw new DateTimePickerException("Maximum Time is an invalid date string", field.Title);
                }
            }

            if (scope.afMinTime) {
                parsedTemp = parseTimeAny(scope.afMinTime, [isoFormats.timeSpan, isoFormats.timeSpanWithSeconds]);
                if (!isNaN(parsedTemp)) {
                    paramsCopy.MinTime = parsedTemp;
                } else {
                    throw new DateTimePickerException("Minimum Time is an invalid date string", field.Title);
                }
            }
        } else {
            paramsCopy.MaxTime = paramsCopy.MinTime = "";
        }

        if (scope.ngModel) {
            if (paramsCopy.PickerType.Value === "time") {
                parsedTemp = parseTimeAny(scope.ngModel, [isoFormats.timeSpan, isoFormats.timeSpanWithSeconds])
                if (!isNaN(parsedTemp)) {
                    paramsCopy.InitialValue = new Date(parsedTemp.valueOf() - parsedTemp.getTimezoneOffset() * 60000);
                } else {
                    throw new DateTimePickerException("Initial Value is an invalid time string", field.Title);
                }
            } else if (paramsCopy.PickerType.Value === "date") {
                parsedTemp = parseDate(scope.ngModel, isoFormats.date);
                if (isNaN(parsedTemp)) {
                    throw new DateTimePickerException("Initial Value is an invalid date string", field.Title);
                }
                paramsCopy.InitialValue = parsedTemp;
            } else {
                parsedTemp = parseDateAny(scope.ngModel, [isoFormats.dateTime, isoFormats.dateTimeWithMilliseconds]);
                if (isNaN(parsedTemp)) {
                    throw new DateTimePickerException("Initial Value is an invalid date time string", field.Title);
                }
                paramsCopy.InitialValue = parsedTemp;
            }
        }

        return paramsCopy;
    }

    function dateFormatter(flatpickrHardcodedFormats) {
        return function (date, format, locale) {
            if (flatpickrHardcodedFormats[format]) {
                format = flatpickrHardcodedFormats[format];
            }
            return window.dnnsfDateFns.formatMs(date, format);
        };
    }

    function valueChangeHandlerFactory(scope) {
        /**
         * 
         * @param {Date[]} selectedDates 
         * @param {string} inputValue 
         * @param {object} instance The flatpickr instance object.
         * @param {object} data Any data related to the event.
         */
        function valueChangeHandler(selectedDates, inputValue, instance, data) {
            if (!inputValue) { return; }
            scope.ngModel = inputValue;
            scope.form.fields[scope.field.TitleCompacted].formattedValue = instance.altInput.value;
        }

        return valueChangeHandler;
    }

    /**
     * 
     * @param {*} params 
     * @param {string} dateFormat 
     * @param {*} flatpickrHardcodedFormats 
     * @param {*} scope 
     */
    function createFlatPickrOptions(params, dateFormat, flatpickrHardcodedFormats, scope) {
        var options = {
            dateFormat: dateFormat,// ISO8601 format
            altFormat: scope.clientFormat || dateFormat,
            ariaDateFormat: "MMMM d, yyyy",
            altInput: true,
            inline: params.Inline,
            time_24hr: params.Time24Hours,
            noCalendar: params.PickerType.Value === "time",
            formatDate: dateFormatter(flatpickrHardcodedFormats),
            minuteIncrement: params.MinuteIncrement,
            maxDate: params.MaxDate,
            minDate: params.MinDate,
            minTime: params.MinTime,
            maxTime: params.MaxTime,
            defaultDate: params.InitialValue,
            allowInput: false,

            onReady: valueChangeHandlerFactory(scope),
            // register both events (onValueUpdate and onChange) to fix some inconsistencies in flatpickr.
            onValueUpdate: valueChangeHandlerFactory(scope),
            onChange: valueChangeHandlerFactory(scope)
        };

        if (dnnsf.api.actionForm.isFormPopupOpen(scope.moduleId)) {
            options.static = true;
        }

        if (params.PickerType.Value === "dateandtime" || params.PickerType.Value === "time") {
            options.enableTime = true;
        }

        if (params.DisableFutureOrPast.Value === "past") {
            options.minDate = "today";
        } else if (params.DisableFutureOrPast.Value === "future") {
            options.maxDate = "today";
        }

        if (params.FirstDayOfWeek.Value === "monday") {
            options.locale = {
                "firstDayOfWeek": 1
            }
        }

        if (params.DisableWeekends) {
            options.disable = [function (date) { return date.getDay() === 0 || date.getDay() === 6 }];
        }

        return options;
    }

    function DateTimePickerException(message, fieldTitle) {
        this.message = message;
        this.fieldTitle = fieldTitle;
        this.name = "DateTimePickerException";
    }

    DateTimePickerException.prototype.toString = function () {
        return this.name + ': ' + this.message + ' in: ' + this.fieldTitle;
    }

})(window.dnnsfAngular15 || window.angular);
