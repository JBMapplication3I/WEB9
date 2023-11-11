(function($){

	var defaults = {
			debug: false,
			resizeable_container: true,
			orientation: 'horizontal',
			viewport_crop: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			},
			navigation: {
				show: true,
				autohide: true,
				css_class: '',
				previous: {
					position: {
						horizontal: 'left',
						vertical: 'top',
						h_offset: 0,
						v_offset: .5,
						h_as_ratio: false,
						v_as_ratio: true
					}
				},
				next: {
					position: {
						horizontal: 'right',
						vertical: 'top',
						h_offset: 0,
						v_offset: .5,
						h_as_ratio: false,
						v_as_ratio: true
					}
				}
			},
			slide: {
				duration: 500,
				step: 'page',
				infinite: false,
				easing: 'swing',
				interval: 0,
				pause_on_hover: true,
				effect: 'slide'
			},
			pagination: {
				enabled: false,
				page_template: '',
				position: {
					horizontal: 'left',
					vertical: 'bottom',
					h_offset: .5,
					v_offset: 0,
					h_as_ratio: true,
					v_as_ratio: false
				}
			},
			draggable: {
				enable: false
			},
			unique_id: 0
		},

		plugin = function (method) {
			var $root = $(this),
				$wrapper,
				$slider,
				$pages,
				$items,

				initialized = false,
				settings = {},

				rendering,

				$navigation = {},

				_state = {
					restore: function () {
						var d = $root.data('edr_carousel');

						if (d) {
							$wrapper = d.$wrapper;
							$slider = d.$slider;
							$pages = d.$pages;
							$items = d.$items;

							$navigation = d.$navigation,

							rendering = d.rendering;

							settings = d.settings;

							return true;
						}

						return false;
					},

					save: function () {
						$root.data('edr_carousel', {
							'$wrapper': $wrapper,
							'$slider': $slider,
							'$pages': $pages,
							'$items': $items,

							'$navigation': $navigation,

							'rendering': rendering,

							'settings': settings
						});
					}
				},

				public_methods = {
					next: function () {
						carousel.next();
					},

					prev: function () {
						carousel.prev();
					}
				},

				carousel = {
					init: function (local_settings) {
						var $current_page,
							touch_device,
							mousedown = 'mousedown',
							mousemove = 'mousemove',
							mouseup = 'mouseup';

						$.extend(true, settings, defaults, local_settings);

						$root.addClass(settings.orientation);

						$wrapper = $root.find('> .wrapper');
						$slider = $wrapper.find('> .slider');
						$pages = $slider.find('> ul');

						$items = $pages.find('> li');

						$items.each(function (i) {
							$(this).addClass('item_' + i);
						});

						rendering = {
							root: {
								width: $root.width(),
								height: $root.height()
							},
							item: {
								full_width: $items.eq(0).outerWidth(true),
								full_height: $items.eq(0).outerHeight(true),
								h_space: $items.eq(0).outerWidth(true) - $items.eq(0).outerWidth(),
								v_space: $items.eq(0).outerHeight(true) - $items.eq(0).outerHeight()
							},
							page: {},
							wrapper: {},
							num_of_items: $items.length,
							num_of_pages: 0,
							items_in_last_page: 0,
							current_position: 0,
							pagination: {},
							interval: {
								timeout: false,
								pause: false
							},
							draggable: {
								start_position: {
									mouse: false,
									slider: false
								},
								disable_clicking: false,
								disable_clicking_interval: ''
							}
						};

						if (settings.pagination.enabled) {
							if (settings.pagination.enabled instanceof $) {
								rendering.pagination.container = settings.pagination.enabled;
								rendering.pagination.outside = true;
							} else if (typeof settings.pagination.enabled === 'string') {
								rendering.pagination.container = $(settings.pagination.enabled);
								rendering.pagination.outside = true;
							} else {
								rendering.pagination.container = $('<ul class="pagination" />');
								$root.append(rendering.pagination.container);
								rendering.pagination.outside = false;
							}

							rendering.pagination.container.delegate('li.carousel_page', 'click', function () {
								carousel.move_to($(this).index());
							});
						}

						if (settings.navigation.show) {
							$navigation.prev = $('<div class="navigation ' + settings.navigation.css_class + ' previous">Previous</div>').appendTo($root);
							$navigation.next = $('<div class="navigation ' + settings.navigation.css_class + ' next">Next</div>').appendTo($root);

							position_element($navigation.prev, settings.navigation.previous.position);
							position_element($navigation.next, settings.navigation.next.position);

							if (settings.navigation.autohide) {
								$navigation.prev
									.fadeTo(0, 0)
									.css('display', 'none');

								$navigation.next
									.fadeTo(0, 0)
									.css('display', 'none');

								$root.hover(function () {
										if (rendering.num_of_pages < 2)
											return;

										$navigation.prev
											.css('display', '')
											.stop()
											.fadeTo(300, 1);

										$navigation.next
											.css('display', '')
											.stop()
											.fadeTo(300, 1);
									}, function () {
										$navigation.prev
											.stop()
											.fadeTo(300, 0, function () {
												$navigation.prev.css('display', 'none');
											});

										$navigation.next
											.stop()
											.fadeTo(300, 0, function () {
												$navigation.next.css('display', 'none');
											});
									});
							}

							$root.append($navigation.prev, $navigation.next);

							$navigation.prev.click(function () {
								clearTimeout(rendering.interval.timeout);

								carousel.prev();
							});

							$navigation.next.click(function () {
								clearTimeout(rendering.interval.timeout);

								carousel.next();
							});
						}

						carousel.resize();

						if (settings.resizeable_container) {
							$(window).resize(function () {
								clearTimeout($root.data('carousel_resize_interval'));

								$wrapper.css({
									height: rendering.page.height - rendering.item.v_space + ($root.height() - rendering.root.height),
									width: rendering.page.width - rendering.item.h_space + ($root.width() - rendering.root.width)
								});

								$root.data('carousel_resize_interval', setTimeout(carousel.resize, 200));
							});
						}

						if (settings.slide.interval > 0) {
							$root.bind('carousel_slide_finished', function () {
								clearTimeout(rendering.interval.timeout);

								if (!rendering.interval.pause)
									rendering.interval.timeout = setTimeout(function () {
										carousel.next();
									}, settings.slide.interval);
							});

							rendering.interval.timeout = setTimeout(function () {
								carousel.next();
							}, settings.slide.interval);

							if (settings.slide.pause_on_hover) {
								$root.hover(
									function () {
										clearTimeout(rendering.interval.timeout);
										rendering.interval.pause = true;
									},
									function () {
										rendering.interval.pause = false;
										rendering.interval.timeout = setTimeout(function () {
											carousel.next();
										}, settings.slide.interval);
									}
								);
							}
						}

						if (settings.draggable.enable) {
							touch_device = 'ontouchstart' in window;

							if (touch_device) {
								mousedown = 'touchstart';
								mousemove = 'touchmove';
								mouseup = 'touchend';
							}

							$root.delegate('a', 'click', function (e) {
								if (rendering.draggable.disable_clicking)
									e.preventDefault();
							});

							$('a', $root).each(function () {
								this.ondragstart = function () {
									return false;
								};
							});

							$root
								.bind(mousedown + '.carousel_' + settings.unique_id, function (e) {
									var originalE = e;

									if (touch_device)
										if (e.originalEvent.touches && e.originalEvent.touches.length)
											e = e.originalEvent.touches[0];
										else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length)
											e = e.originalEvent.changedTouches[0];

									rendering.draggable.start_position.mouse = {
										x: e.pageX,
										y: e.pageY
									};

									rendering.draggable.start_position.slider = false;

									originalE.stopPropagation();
								})
								.bind(mousemove + '.carousel_' + settings.unique_id, function (e) {
									var new_position,
										relative_property,
										mouse_position,
										activeAxis,
										last_page_offset,
										position_delta,
										snap_size,
										areaIndicator,
										relativeXCoordinates,
										relativeYCoordinates,
										originalE = e;

									if (
										rendering.draggable.start_position.mouse === false ||
										(
											rendering.draggable.start_position.mouse.x === e.pageX &&
											rendering.draggable.start_position.mouse.y === e.pageY
										)
									)
										return;

									clearTimeout(rendering.draggable.disable_clicking_interval);
									rendering.draggable.disable_clicking = true;

									if (settings.slide.interval > 0)
										clearTimeout(rendering.interval.timeout);

									if (touch_device)
										if (e.originalEvent.touches && e.originalEvent.touches.length)
											e = e.originalEvent.touches[0];
										else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length)
											e = e.originalEvent.changedTouches[0];

									relativeXCoordinates = rendering.draggable.start_position.mouse.x - e.pageX;
									relativeYCoordinates = rendering.draggable.start_position.mouse.y - e.pageY;

									if (settings.orientation == 'horizontal') {
										activeAxis = 'x';
										mouse_position = e.pageX;

										if (relativeYCoordinates == 0)
											areaIndicator = relativeXCoordinates;
										else
											areaIndicator = relativeXCoordinates / relativeYCoordinates;
									} else {
										activeAxis = 'y';
										mouse_position = e.pageY;

										if (relativeXCoordinates == 0)
											areaIndicator = relativeYCoordinates;
										else
											areaIndicator = relativeYCoordinates / relativeXCoordinates;
									}

									areaIndicator = Math.abs(areaIndicator);

									if (areaIndicator < 1)
										return;

									originalE.preventDefault();
									originalE.stopPropagation();

									if (infinite_enabled()) {
										position_delta = rendering.draggable.start_position.mouse[activeAxis] - mouse_position;

										if (Math.abs(position_delta) > 50) {
											rendering.draggable.start_position.mouse = false;
											if (position_delta < 0)
												carousel.prev();
											else
												carousel.next();
										}
									} else {
										$slider.stop(true);

										if (settings.orientation == 'horizontal') {
											mouse_position = e.pageX;
											relative_property = 'left';
											last_page_offset = rendering.page.width;

											if (settings.slide.step == 'item' && rendering.items_in_last_page < rendering.page.cols)
												last_page_offset += rendering.page.width - rendering.items_in_last_page * rendering.item.full_width;

											last_page_offset -= $slider.width();
										} else {
											mouse_position = e.pageY;
											relative_property = 'top';
											last_page_offset = rendering.page.height;

											if (settings.slide.step == 'item' && Math.ceil(rendering.items_in_last_page / rendering.page.cols) < rendering.page.rows)
												last_page_offset += rendering.page.height - Math.ceil(rendering.items_in_last_page / rendering.page.cols) * rendering.item.full_height;

											last_page_offset -= $slider.height();
										}

										if (rendering.draggable.start_position.slider === false)
											rendering.draggable.start_position.slider = parseInt($slider.css(relative_property));

										new_position = rendering.draggable.start_position.slider + (mouse_position - rendering.draggable.start_position.mouse[activeAxis]);

										if (new_position > 1)
											new_position = Math.floor(Math.log(new_position) / 2.3 * 15);
										else if (new_position < last_page_offset)
											new_position = last_page_offset - (Math.floor(Math.log(Math.abs(new_position) + last_page_offset) / 2.3 * 15));

										$slider.css(relative_property, new_position);

										if (settings.pagination.enabled) {
											if (settings.slide.step == 'page')
												if (settings.orientation == 'horizontal')
													snap_size = rendering.page.width;
												else
													snap_size = rendering.page.height;
											else
												if (settings.orientation == 'horizontal')
													snap_size = rendering.item.full_width;
												else
													snap_size = rendering.item.full_height;

											rendering.pagination.container.find('> li')
												.removeClass('active')
												.eq(Math.round(Math.abs(new_position) / snap_size))
													.addClass('active');
										}
									}
								})
								.bind(mouseup + '.carousel_' + settings.unique_id, function (e) {
									var current_position,
										snap_size,
										last_page_offset,
										new_slider_position,
										slide_duration = 100;

									rendering.draggable.start_position.mouse = false;

									rendering.draggable.disable_clicking_interval = setTimeout(function () {
										rendering.draggable.disable_clicking = false;
									}, 10);

									if (rendering.draggable.start_position.slider === false)
										return;

									rendering.draggable.start_position.slider = false;

									if (settings.orientation == 'horizontal') {
										current_position = parseInt($slider.css('left'));
										snap_size = rendering.page.width;

										if (settings.slide.step == 'item' && rendering.items_in_last_page < rendering.page.cols)
											snap_size += rendering.page.width - rendering.items_in_last_page * rendering.item.full_width;

										last_page_offset = snap_size - $slider.width();
									} else {
										current_position = parseInt($slider.css('top'));
										snap_size = rendering.page.height;

										if (settings.slide.step == 'item' && Math.ceil(rendering.items_in_last_page / rendering.page.cols) < rendering.page.rows)
											snap_size += rendering.page.height - Math.ceil(rendering.items_in_last_page / rendering.page.cols) * rendering.item.full_height;

										last_page_offset = snap_size - $slider.height();
									}

									if (current_position > 0) {
										new_slider_position = 0;
									} else if (current_position < last_page_offset) {
										if (settings.slide.step == 'page')
											new_slider_position = rendering.num_of_pages - 1;
										else
											if (settings.orientation == 'horizontal')
												new_slider_position = rendering.page.cols * (rendering.num_of_pages - 1) + (rendering.items_in_last_page > rendering.page.cols ? rendering.page.cols : rendering.items_in_last_page) - rendering.page.cols;
											else
												new_slider_position = Math.ceil(rendering.num_of_items / rendering.page.cols) - rendering.page.rows;
									} else {
										if (settings.slide.step == 'page')
											new_slider_position = Math.round(current_position / snap_size);
										else
											if (settings.orientation == 'horizontal')
												new_slider_position = Math.round(current_position / rendering.item.full_width);
											else
												new_slider_position = Math.round(current_position / rendering.item.full_height);

										new_slider_position = Math.abs(new_slider_position);

										slide_duration = 400;
									}

									carousel.move_to({
										position: new_slider_position,
										page_change_check: false,
										duration: slide_duration
									});
								});
						}
					},

					resize: function () {
						var $new_page,
							i = 0,
							total_items_page_items_modulo,
							$current_page;

						initialized = _state.restore();

						if (initialized) {
							rendering.root = {
								width: $root.width(),
								height: $root.height()
							};

							$new_page = $(
								'<ul class="new_page"' +
								(settings.slide.step == 'page' && settings.slide.effect == 'fade'
									? ' style="opacity: .001; position: absolute; z-index: -1;"'
									: ''
								) +
								' />'
							)
								.appendTo($slider);

							for (; i < rendering.num_of_items; i++)
								$items.filter('.item_' + i).appendTo($new_page);

							$items.removeClass('first');

							$new_page
								.removeClass('new_page')
								.siblings()
									.remove();

							rendering.current_position = 0;
							$slider.css({
								top: 0,
								left: 0
							});

							$pages = $slider.find('> ul');
						}

						rendering.page.width = rendering.root.width + rendering.item.h_space - settings.viewport_crop.left - settings.viewport_crop.right;
						rendering.page.height = rendering.root.height + rendering.item.v_space - settings.viewport_crop.top - settings.viewport_crop.bottom;

						if (rendering.page.width < rendering.item.full_width)
							rendering.page.cols = 1;
						else
							rendering.page.cols = Math.floor(rendering.page.width / rendering.item.full_width);

						if (rendering.page.height < rendering.item.full_height)
							rendering.page.rows = 1;
						else
							rendering.page.rows = Math.floor(rendering.page.height / rendering.item.full_height);

						rendering.page.items_count = rendering.page.cols * rendering.page.rows;

						total_items_page_items_modulo = rendering.num_of_items % rendering.page.items_count;
						rendering.num_of_pages = Math.ceil(rendering.num_of_items / rendering.page.items_count);
						rendering.items_in_last_page = rendering.page.items_count > 1 ? (total_items_page_items_modulo == 0 ? rendering.page.items_count : total_items_page_items_modulo) : 1;

						if (rendering.page.width > rendering.item.full_width)
							rendering.page.width = rendering.item.full_width * rendering.page.cols;

						if (rendering.page.height > rendering.item.full_height)
							rendering.page.height = rendering.item.full_height * rendering.page.rows;

						rendering.wrapper.top = Math.floor((rendering.root.height - (rendering.page.height - rendering.item.v_space + settings.viewport_crop.top + settings.viewport_crop.bottom)) / 2);
						rendering.wrapper.left = Math.floor((rendering.root.width - (rendering.page.width - rendering.item.h_space + settings.viewport_crop.left + settings.viewport_crop.right)) / 2);

						$wrapper
							.width(rendering.page.width - rendering.item.h_space)
							.height(rendering.page.height - rendering.item.v_space)
							.css({
								top: rendering.wrapper.top + settings.viewport_crop.top,
								left: rendering.wrapper.left + settings.viewport_crop.left
							});

						$slider.css({
							marginTop: - rendering.item.v_space,
							marginLeft: - rendering.item.h_space
						});

						if (settings.orientation == 'horizontal')
							$slider.css({
								height: rendering.page.height,
								width: 0
							});
						else
							$slider.css({
								height: 0,
								width: rendering.page.width
							});

						if (infinite_enabled()) {
							$pages.css({
								height: rendering.page.height,
								width: rendering.page.width
							});

							if (settings.orientation == 'horizontal') {
								$slider.width(rendering.page.width * rendering.num_of_pages);
								$pages.width($slider.width());
							} else {
								$slider.height(rendering.page.height * rendering.num_of_pages);
								$pages.height($slider.height());
							}

							$items.eq(0).addClass('first');

							if (settings.pagination.enabled)
								rendering.pagination.container.css('display', 'none');
						} else {
							$items.each(function (i) {
								var $this = $(this),
									itemWidth,
									itemHeight;

								if (rendering.page.width < rendering.item.full_width)
									itemWidth = rendering.page.width;
								else
									itemWidth = rendering.item.full_width;

								if (rendering.page.height < rendering.item.full_height)
									itemHeight = rendering.page.height;
								else
									itemHeight = rendering.item.full_height;

								$this.width(itemWidth - rendering.item.h_space);
								$this.height(itemHeight - rendering.item.v_space);

								if (i % rendering.page.items_count == 0) {
									if (i == 0) {
										$pages.css({
												height: rendering.page.height,
												width: rendering.page.width
											});
									} else
										$current_page = $(
											'<ul' +
											(settings.slide.step == 'page' && settings.slide.effect == 'fade'
												? ' style="opacity: .001; position: absolute; z-index: -1;"'
												: ''
											) +
											' />'
										)
											.css({
												height: rendering.page.height,
												width: rendering.page.width
											})
											.appendTo($slider);

									if (settings.orientation == 'horizontal')
										$slider.width($slider.width() + rendering.page.width);
									else
										$slider.height($slider.height() + rendering.page.height);
								}

								if (i < rendering.page.items_count)
									return;

								$this.appendTo($current_page);
							});

							$pages = $slider.find('> ul');

							if (settings.pagination.enabled) {
								var i = 0,
									pages_html = '',
									page_count = settings.slide.step == 'page'
										? rendering.num_of_pages
										: (settings.orientation == 'horizontal'
											? rendering.page.cols * (rendering.num_of_pages - 1) + (rendering.items_in_last_page > rendering.page.cols ? rendering.page.cols : rendering.items_in_last_page) - rendering.page.cols + 1
											: Math.ceil(rendering.num_of_items / rendering.page.cols) - rendering.page.rows + 1);

								rendering.pagination.container
									.css('display', '')
									.empty();

								if (page_count > 1) {
									for (; i < page_count; i++)
										pages_html += '<li class="carousel_page' + (i == rendering.current_position ? ' active' : '') + '">' + settings.pagination.page_template.replace('{{page}}', i + 1) + '</li>';

									rendering.pagination.container.append(pages_html);

									position_element(rendering.pagination.container, settings.pagination.position);
								} else
									rendering.pagination.container.css('display', 'none');
							}
						}

						if (settings.navigation.show && !settings.navigation.autohide)
							if (rendering.num_of_pages > 1) {
								$navigation.prev
									.css('display', '')
									.stop()
									.fadeTo(300, 1);

								$navigation.next
									.css('display', '')
									.stop()
									.fadeTo(300, 1);
							} else {
								$navigation.prev
									.stop()
									.fadeTo(300, 0, function () {
										$navigation.prev.css('display', 'none');
									});

								$navigation.next
									.stop()
									.fadeTo(300, 0, function () {
										$navigation.next.css('display', 'none');
									});
							}

						_state.save();
					},

					move_to: function (position) {
						var to_animate,
							new_position,
							last_slide,
							one_slide_size,
							i = 0,
							first_index,
							items_needed,
							num_of_items_to_move,

							slide_properties = {
								duration: settings.slide.duration,
								easing: settings.slide.easing,
								page_change_check: true
							};

						initialized = _state.restore();

						if (typeof position == 'object') {
							$.extend(slide_properties, position);
							position = slide_properties.position;
						}

						if (infinite_enabled()) {
							first_index = $items.filter('.first').index();
							$items.removeClass('first');
							$slider.stop();

							if (settings.slide.step == 'page') {
								if (position > rendering.current_position)
									if (settings.orientation == 'horizontal')
										new_position = - rendering.page.width;
									else
										new_position = - rendering.page.height;
								else
									if (settings.orientation == 'horizontal')
										$slider.css('left', - rendering.page.width);
									else
										$slider.css('top', - rendering.page.height);

								num_of_items_to_move = rendering.page.items_count;
							} else {
								if (position > rendering.current_position)
									if (settings.orientation == 'horizontal')
										new_position = - rendering.item.full_width;
									else
										new_position = - rendering.item.full_height;
								else
									if (settings.orientation == 'horizontal')
										$slider.css('left', - rendering.item.full_width);
									else
										$slider.css('top', - rendering.item.full_height);

								num_of_items_to_move = 1;
							}

							if (position > rendering.current_position) {
								if (settings.orientation == 'horizontal')
									$slider.css('left', 0);
								else
									$slider.css('top', 0);

								for (; i < first_index;)
									$items.eq(i++).appendTo($pages);

								$items = $pages.find('> li');

								$items.eq(num_of_items_to_move).addClass('first');
							} else {
								if (first_index < num_of_items_to_move) {
									items_needed = rendering.num_of_items - (num_of_items_to_move - first_index);

									for (i = rendering.num_of_items - 1; i >= items_needed;)
										$items.eq(i--).prependTo($pages);

									$items = $pages.find('> li');
									$items.eq(0).addClass('first');
								} else
									$items.eq(first_index - num_of_items_to_move).addClass('first');

								new_position = 0;
							}
						} else {
							if (settings.slide.step == 'page') {
								last_slide = rendering.num_of_pages - 1;

								if (settings.orientation == 'horizontal')
									one_slide_size = rendering.page.width;
								else
									one_slide_size = rendering.page.height;
							} else {
								if (settings.orientation == 'horizontal') {
									last_slide = rendering.page.cols * (rendering.num_of_pages - 1) + (rendering.items_in_last_page > rendering.page.cols ? rendering.page.cols : rendering.items_in_last_page) - rendering.page.cols;
									one_slide_size = rendering.item.full_width;
								} else {
									last_slide = Math.ceil(rendering.num_of_items / rendering.page.cols) - rendering.page.rows;
									one_slide_size = rendering.item.full_height;
								}
							}

							if (position < 0)
								position = last_slide;
							else if (position > last_slide)
								position = 0;

							new_position = - position * one_slide_size;

							if (settings.pagination.enabled) {
								rendering.pagination.container
									.find('li')
										.removeClass('active')
										.eq(position)
											.addClass('active');;
							}
						}

						if (slide_properties.page_change_check && position == rendering.current_position)
							return;

						if (settings.slide.step == 'page' && settings.slide.effect == 'fade') {
							$pages.eq(rendering.current_position)
								.stop()
								.css({
									zIndex: -1
								})
								.animate(
									{
										opacity: .001
									},
									slide_properties.duration,
									slide_properties.easing
								);

							$pages.eq(position)
								.stop()
								.css({
									zIndex: 0
								})
								.animate(
									{
										opacity: 1
									},
									slide_properties.duration,
									slide_properties.easing,
									function () {
										$root.trigger('carousel_slide_finished');
									}
								);
						} else {
							if (settings.orientation == 'horizontal')
								to_animate = {
									left: new_position
								};
							else
								to_animate = {
									top: new_position
								};

							$slider
								.stop()
								.animate(to_animate, slide_properties.duration, slide_properties.easing, function () {
									$root.trigger('carousel_slide_finished');
								});
						}

						rendering.current_position = position;
						_state.save();
					},

					next: function () {
						carousel.move_to(rendering.current_position + 1);
					},

					prev: function () {
						carousel.move_to(rendering.current_position - 1);
					}
				},

				infinite_enabled = function () {
					return settings.slide.infinite && ((settings.orientation == 'horizontal' && rendering.page.rows == 1) || (settings.orientation == 'vertical' && rendering.page.cols == 1));
				},

				position_element = function (element, position) {
					var v_offset = position.v_as_ratio ? Math.floor(position.v_offset * rendering.root.height) : position.v_offset,
						h_offset = position.h_as_ratio ? Math.floor(position.h_offset * rendering.root.width) : position.h_offset;

					if (position.vertical == 'top') {
						if (position.v_as_ratio)
							element.css('margin-top', - (Math.floor(element.outerHeight() / 2)));

						element.css('top', v_offset);
					} else {
						if (position.v_as_ratio)
							element.css('margin-bottom', - (Math.floor(element.outerHeight() / 2)));

						element.css({
							top: 'auto',
							bottom: v_offset
						});
					}

					if (position.horizontal == 'left') {
						if (position.h_as_ratio)
							element.css('margin-left', - (Math.floor(element.outerWidth() / 2)));

						element.css('left', h_offset);
					} else {
						if (position.h_as_ratio)
							element.css('margin-right', - (Math.floor(element.outerWidth() / 2)));

						element.css({
							left: 'auto',
							right: h_offset
						});
					}
				};

			initialized = _state.restore();

			try {
				if (initialized)
					if (typeof method === 'object' || !method)
						$.error('jQuery.carousel: Already initialized on given element');
					else
						if (public_methods[method])
							public_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
						else
							$.error('jQuery.carousel: Method ' + method + ' does not exist');
				else
					carousel.init(method);
			} catch (e) {
				if (settings.debug && typeof console === 'object')
					console.error(e);
			}

			_state.save();
		};

	$.fn.multicarousel_1_4 = function () {
		var args = arguments;

		return this.each(function () {
			plugin.apply(this, args);
		});
	};

})(eds3_5_jq);
