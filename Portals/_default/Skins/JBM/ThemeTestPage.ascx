<%@ Control language="c#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="HEADER" Src="includes/header.ascx" %>
<%@ Register TagPrefix="dnn" TagName="FOOTER" Src="includes/footer.ascx" %>

<div class="siteWrapper">
<dnn:HEADER ID="uxHeader" runat="server" SkinPath="<%# SkinPath %>" /> 
<!-- Single Container Row -->
<div class="container">
  <div class="row">
    <div class="col-12">
      <div id="ContentPane" class="contentPane" runat="server"></div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="container theme-showcase" role="main">
          <!-- Main jumbotron for a primary marketing message or call to action -->
          <div class="jumbotron">
            <h1>Theme example</h1>
            <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
          </div>
          <div class="page-header">
            <h1>Buttons</h1>
          </div>
          <p>
            <button type="button" class="btn btn-lg btn-default">Default</button>
            <button type="button" class="btn btn-lg btn-primary">Primary</button>
            <button type="button" class="btn btn-lg btn-success">Success</button>
            <button type="button" class="btn btn-lg btn-info">Info</button>
            <button type="button" class="btn btn-lg btn-warning">Warning</button>
            <button type="button" class="btn btn-lg btn-danger">Danger</button>
            <button type="button" class="btn btn-lg btn-link">Link</button>
          </p>
          <p>
            <button type="button" class="btn btn-default">Default</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-link">Link</button>
          </p>
          <p>
            <button type="button" class="btn btn-sm btn-default">Default</button>
            <button type="button" class="btn btn-sm btn-primary">Primary</button>
            <button type="button" class="btn btn-sm btn-success">Success</button>
            <button type="button" class="btn btn-sm btn-info">Info</button>
            <button type="button" class="btn btn-sm btn-warning">Warning</button>
            <button type="button" class="btn btn-sm btn-danger">Danger</button>
            <button type="button" class="btn btn-sm btn-link">Link</button>
          </p>
          <p>
            <button type="button" class="btn btn-xs btn-default">Default</button>
            <button type="button" class="btn btn-xs btn-primary">Primary</button>
            <button type="button" class="btn btn-xs btn-success">Success</button>
            <button type="button" class="btn btn-xs btn-info">Info</button>
            <button type="button" class="btn btn-xs btn-warning">Warning</button>
            <button type="button" class="btn btn-xs btn-danger">Danger</button>
            <button type="button" class="btn btn-xs btn-link">Link</button>
          </p>
          <div class="page-header">
            <h1>Tables</h1>
          </div>
          <div class="row">
            <div class="col-md-6">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="2">1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@TwBootstrap</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="page-header">
            <h1>Thumbnails</h1>
          </div>
          <img data-src="holder.js/200x200" class="img-thumbnail" alt="200x200"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzIwMHgyMDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTM1ZjE0MWM0ZCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MzVmMTQxYzRkIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9Ijc1LjUiIHk9IjEwNC41Ij4yMDB4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+"
            data-holder-rendered="true" style="width: 200px; height: 200px;" />
          <div class="page-header">
            <h1>Labels</h1>
          </div>
          <h1>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </h1>
          <h2>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </h2>
          <h3>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </h3>
          <h4>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </h4>
          <h5>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </h5>
          <h6>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </h6>
          <p>
            <span class="label label-default">Default</span>
            <span class="label label-primary">Primary</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-danger">Danger</span>
          </p>
          <div class="page-header">
            <h1>Badges</h1>
          </div>
          <p>
            <a>Inbox <span class="badge">42</span></a>
          </p>
          <ul class="nav nav-pills" role="tablist">
            <li role="presentation" class="active"><a>Home <span class="badge">42</span></a></li>
            <li role="presentation"><a>Profile</a></li>
            <li role="presentation"><a>Messages <span class="badge">3</span></a></li>
          </ul>
          <div class="page-header">
            <h1>Dropdown menus</h1>
          </div>
          <div class="dropdown theme-dropdown clearfix">
            <a id="dropdownMenu1" class="sr-only dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li class="active"><a>Action</a></li>
              <li><a>Another action</a></li>
              <li><a>Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a>Separated link</a></li>
            </ul>
          </div>
          <div class="page-header">
            <h1>Navs</h1>
          </div>
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a>Home</a></li>
            <li role="presentation"><a>Profile</a></li>
            <li role="presentation"><a>Messages</a></li>
          </ul>
          <ul class="nav nav-pills" role="tablist">
            <li role="presentation" class="active"><a>Home</a></li>
            <li role="presentation"><a>Profile</a></li>
            <li role="presentation"><a>Messages</a></li>
          </ul>
          <div class="page-header">
            <h1>Navbars</h1>
          </div>
          <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Project name</a>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="active"><a>Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a>Action</a></li>
                      <li><a>Another action</a></li>
                      <li><a>Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li class="dropdown-header">Nav header</li>
                      <li><a>Separated link</a></li>
                      <li><a>One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
          </nav>
          <nav class="navbar navbar-inverse">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Project name</a>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="active"><a>Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a>Action</a></li>
                      <li><a>Another action</a></li>
                      <li><a>Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li class="dropdown-header">Nav header</li>
                      <li><a>Separated link</a></li>
                      <li><a>One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
          </nav>
          <div class="page-header">
            <h1>Alerts</h1>
          </div>
          <div class="alert alert-success" role="alert">
            <strong>Well done!</strong> You successfully read this important alert message.
          </div>
          <div class="alert alert-info" role="alert">
            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
          <div class="alert alert-warning" role="alert">
            <strong>Warning!</strong> Best check yo self, you're not looking too good.
          </div>
          <div class="alert alert-danger" role="alert">
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
          <div class="page-header">
            <h1>Progress bars</h1>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete</span></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div>
            <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div>
            <div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div>
          </div>
          <div class="page-header">
            <h1>List groups</h1>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div><!-- /.col-sm-4 -->
            <div class="col-sm-4">
              <div class="list-group">
                <a class="list-group-item active">
                  Cras justo odio
                </a>
                <a class="list-group-item">Dapibus ac facilisis in</a>
                <a class="list-group-item">Morbi leo risus</a>
                <a class="list-group-item">Porta ac consectetur ac</a>
                <a class="list-group-item">Vestibulum at eros</a>
              </div>
            </div><!-- /.col-sm-4 -->
            <div class="col-sm-4">
              <div class="list-group">
                <a class="list-group-item active">
                  <h4 class="list-group-item-heading">List group item heading</h4>
                  <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <a class="list-group-item">
                  <h4 class="list-group-item-heading">List group item heading</h4>
                  <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <a class="list-group-item">
                  <h4 class="list-group-item-heading">List group item heading</h4>
                  <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
              </div>
            </div><!-- /.col-sm-4 -->
          </div>
          <div class="page-header">
            <h1>Panels</h1>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
            </div><!-- /.col-sm-4 -->
            <div class="col-sm-4">
              <div class="panel panel-success">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
            </div><!-- /.col-sm-4 -->
            <div class="col-sm-4">
              <div class="panel panel-warning">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-danger">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
            </div><!-- /.col-sm-4 -->
          </div>
          <div class="page-header">
            <h1>Wells</h1>
          </div>
          <div class="well">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div class="page-header">
            <h1>Carousel</h1>
          </div>
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class=""></li>
              <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
              <li data-target="#carousel-example-generic" data-slide-to="2" class="active"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item">
                <img data-src="holder.js/1140x500/auto/#777:#555/text:First slide" alt="First slide [1140x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvMTE0MHg1MDAvYXV0by8jNzc3OiM1NTUvdGV4dDpGaXJzdCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1MzVmMTNiMTgxIHRleHQgeyBmaWxsOiM1NTU7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NTdwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTUzNWYxM2IxODEiPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyIvPjxnPjx0ZXh0IHg9IjM5MC41MDc4MTI1IiB5PSIyNzUuNSI+Rmlyc3Qgc2xpZGU8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true">
              </div>
              <div class="item">
                <img data-src="holder.js/1140x500/auto/#666:#444/text:Second slide" alt="Second slide [1140x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvMTE0MHg1MDAvYXV0by8jNjY2OiM0NDQvdGV4dDpTZWNvbmQgc2xpZGUKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTM1ZjEzZTUxOCB0ZXh0IHsgZmlsbDojNDQ0O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjU3cHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MzVmMTNlNTE4Ij48cmVjdCB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiM2NjYiLz48Zz48dGV4dCB4PSIzMzUuNjAxNTYyNSIgeT0iMjc1LjUiPlNlY29uZCBzbGlkZTwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true">
              </div>
              <div class="item active">
                <img data-src="holder.js/1140x500/auto/#555:#333/text:Third slide" alt="Third slide [1140x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvMTE0MHg1MDAvYXV0by8jNTU1OiMzMzMvdGV4dDpUaGlyZCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1MzVmMTNjN2I1IHRleHQgeyBmaWxsOiMzMzM7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NTdwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTUzNWYxM2M3YjUiPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzU1NSIvPjxnPjx0ZXh0IHg9IjM3Ny44NjcxODc1IiB5PSIyNzUuNSI+VGhpcmQgc2xpZGU8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true">
              </div>
            </div>
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<dnn:FOOTER ID="uxFooter" runat="server" SkinPath="<%# SkinPath %>" />
</div>
