'use strict';



;define("chat-app/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chat-app/app", ["exports", "ember-resolver", "ember-load-initializers", "chat-app/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("chat-app/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("chat-app/components/accept-request", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div id="accept">
  
  </div><a {{action "acceptRequest" @name}} href="#">
      <span class="icon">
          <ion-icon name="thumbs-up-outline"></ion-icon>
      </span>
  </a>
  */
  {
    "id": "UBlbUT5Z",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[10,\"div\"],[14,1,\"accept\"],[12],[2,\"\\n\\n\"],[13],[11,\"a\"],[24,6,\"#\"],[4,[38,0],[[32,0],\"acceptRequest\",[32,1]],null],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"thumbs-up-outline\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/accept-request.hbs"
    }
  });

  let AcceptRequestComponent = (_dec = Ember._action, (_class = class AcceptRequestComponent extends _component.default {
    acceptRequest(name) {
      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/acceptrequest/" + name,
        data: {},
        dataType: "text",
        success: function (data) {
          if (data === 'Request Accepted') {
            $('#accept').html("request accepted");
          } else {
            console.log("request not accepted :error"); // var arr = [];
            // var str = "";
            // for (var i in result) {
            //     arr.push([i, result[i]]);
            // }
            // for(var i in arr){
            //     if(arr[i][0] === undefined){
            //         break;
            //     }
            //     else{
            //     }
            // }
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "acceptRequest", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "acceptRequest"), _class.prototype)), _class));
  _exports.default = AcceptRequestComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AcceptRequestComponent);
});
;define("chat-app/components/auth", ["exports", "@glimmer/component", "chat-app/services"], function (_exports, _component, _services) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form>
      <div class="text-field">
          <Input type="text" id="username" required />
          <span></span>
          <label>UserName:</label>
      </div>
      <div class="text-field">
          <Input type="password" id="password" required />
          <span></span>
          <label>Password:</label>
      </div>
      <div id="result"></div>
      <input {{action "buttonClick"}}type="submit" value="Start Chatting">
      <div class="signup_link">
          New User?<LinkTo @route="signup">Signup</LinkTo>
      </div>
  </form>
  */
  {
    "id": "gwJpllmK",
    "block": "{\"symbols\":[],\"statements\":[[10,\"form\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,1,\"username\"],[24,\"required\",\"\"],[24,4,\"text\"]],[[],[]],null],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"UserName:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,1,\"password\"],[24,\"required\",\"\"],[24,4,\"password\"]],[[],[]],null],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"Password:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,1,\"result\"],[12],[13],[2,\"\\n    \"],[11,\"input\"],[24,2,\"Start Chatting\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"buttonClick\"],null],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"signup_link\"],[12],[2,\"\\n        New User?\"],[8,\"link-to\",[],[[\"@route\"],[\"signup\"]],[[\"default\"],[{\"statements\":[[2,\"Signup\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/auth.hbs"
    }
  });

  let AuthComponent = (_dec = Ember.inject.service('index'), _dec2 = Ember._action, (_class = class AuthComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "auth", _descriptor, this);
    }

    //@tracked isCrct;
    buttonClick() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      var value = null; // this.router.transitionTo('welcome');

      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/auth",
        data: {
          username: username,
          password: password
        },
        dataType: "text",
        success: function (data) {
          // console.log("hello from servlet" + username + password);
          var result = data;

          if (result == "valid") {
            // IndexService.setProperty('success');
            // auth.setProperty('success');
            console.log("hello" + username + password); //    this.auth.setProperty('success');

            value = 'success';
            dummy.servicecall(value);
          } else {
            $('#result').html("Invalid username or password");
            console.log(username + " or " + password + " is incorrect");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      }); // for(var i=0;i<1000;i++){
      // }
      // console.log('after ajax call');
      // if(value === 'success'){
      //     this.auth.setProperty(value);
      // }
    }

    servicecall(status) {
      this.auth.setProperty('success');
    } // if ((username == "abc") && (password == "123")) {
    //     window.location.href = "home";
    // }
    // else {
    //     window.location.href = "authfailure";
    // }
    // })
    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "auth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonClick", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "buttonClick"), _class.prototype)), _class));
  _exports.default = AuthComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AuthComponent);
});
;define("chat-app/components/chat-sender", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="bottom-bar">
      <div class="chat">
          <input type="text" placeholder="Type a message..." id="message" />
          <button {{action "sendMessage" @name}} type="submit">
              <ion-icon name="send"></ion-icon>
          </button>
      </div>
  </div>
  */
  {
    "id": "Fw66zD4v",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[10,\"div\"],[14,0,\"bottom-bar\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"chat\"],[12],[2,\"\\n        \"],[10,\"input\"],[14,\"placeholder\",\"Type a message...\"],[14,1,\"message\"],[14,4,\"text\"],[12],[13],[2,\"\\n        \"],[11,\"button\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"sendMessage\",[32,1]],null],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"send\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/chat-sender.hbs"
    }
  });

  let ChatSenderComponent = (_dec = Ember.inject.service('index'), _dec2 = Ember._action, (_class = class ChatSenderComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "chat", _descriptor, this);
    }

    sendMessage(name) {
      let message = document.getElementById("message").value;
      var value = null; // this.router.transitionTo('welcome');

      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/chatsend",
        data: {
          message: message
        },
        dataType: "text",
        success: function (data) {
          if (data == "success") {
            console.log("hello" + message);
            dummy.chat.setRedirect(name);
            console.log(name);
          } else {
            console.log("Error: message not send");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "chat", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "sendMessage", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "sendMessage"), _class.prototype)), _class));
  _exports.default = ChatSenderComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ChatSenderComponent);
});
;define("chat-app/components/nav-bar", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <head>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </head>
  <div class="bg">
    <h3>Chatty</h3>
    <div class="navigation">
      <ul>
        <li class="list active">
          <a href="#">
            <span class="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span class="text">Home</span>
          </a>
        </li>
  
        <li class="list">
          <LinkTo @route="requests">
            <span class="icon">
              <ion-icon name="person-add-outline"></ion-icon>
            </span>
            <span class="text">Requests</span>
          </LinkTo>
        </li>
  
        <li class="list">
          <LinkTo @route="friends">
            <span class="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span class="text">Friends</span>
          </LinkTo>
        </li>
  
        <li class="list">
          <LinkTo @route="people">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="text">People</span>
          </LinkTo>
        </li>
        <li class="list">
          <a href="/chatapp/">
            <span class="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span class="text">Logout</span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>
  </div>
  
  
  
  <!--<header>
    <h3>Chatty</h3>
    <nav>
      <ul class="nav_links">
        <li>
          <LinkTo @route="requests">
            request
          </LinkTo>
        </li>
        <li>
          <LinkTo @route="people">
            people
          </LinkTo>
        </li>
        <li>
          <LinkTo @route="chat">
            chat
          </LinkTo>
        </li>
      </ul>
    </nav>
    <LinkTo @route="index">Logout</LinkTo>
  </header>
  <div id="topmenu">
    <nav>
      <h3>Chatty</h3>
  
       <div class="requests">
        <LinkTo @route="requests">
          <img src="../assets/images/request1.png" alt="request">
        </LinkTo>
      </div>
  
      <div class="people">
        <LinkTo @route="people">
          <img src="../assets/images/people1.webp" alt="people">
        </LinkTo>
      </div>
  
      <div class="chats">
        <LinkTo @route="chat">
          <img src="../assets/images/chat1.png" alt="chat">
        </LinkTo>
      </div>
      
     
  
    </nav>
  </div>!-->
  */
  {
    "id": "kVznfGzD",
    "block": "{\"symbols\":[],\"statements\":[[10,\"head\"],[12],[2,\"\\n  \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n  \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n    \"],[10,\"ul\"],[12],[2,\"\\n      \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n        \"],[10,\"a\"],[14,6,\"#\"],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[10,\"a\"],[14,6,\"/chatapp/\"],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"log-out-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Logout\"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\\n\\n\"],[3,\"<header>\\n  <h3>Chatty</h3>\\n  <nav>\\n    <ul class=\\\"nav_links\\\">\\n      <li>\\n        <LinkTo @route=\\\"requests\\\">\\n          request\\n        </LinkTo>\\n      </li>\\n      <li>\\n        <LinkTo @route=\\\"people\\\">\\n          people\\n        </LinkTo>\\n      </li>\\n      <li>\\n        <LinkTo @route=\\\"chat\\\">\\n          chat\\n        </LinkTo>\\n      </li>\\n    </ul>\\n  </nav>\\n  <LinkTo @route=\\\"index\\\">Logout</LinkTo>\\n</header>\\n<div id=\\\"topmenu\\\">\\n  <nav>\\n    <h3>Chatty</h3>\\n\\n     <div class=\\\"requests\\\">\\n      <LinkTo @route=\\\"requests\\\">\\n        <img src=\\\"../assets/images/request1.png\\\" alt=\\\"request\\\">\\n      </LinkTo>\\n    </div>\\n\\n    <div class=\\\"people\\\">\\n      <LinkTo @route=\\\"people\\\">\\n        <img src=\\\"../assets/images/people1.webp\\\" alt=\\\"people\\\">\\n      </LinkTo>\\n    </div>\\n\\n    <div class=\\\"chats\\\">\\n      <LinkTo @route=\\\"chat\\\">\\n        <img src=\\\"../assets/images/chat1.png\\\" alt=\\\"chat\\\">\\n      </LinkTo>\\n    </div>\\n    \\n   \\n\\n  </nav>\\n</div>!\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/components/nav-bar.hbs"
    }
  });

  let NavBarComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class NavBarComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "auth", _descriptor, this);
    }

    findRequests() {
      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/request",
        data: {},
        dataType: "text",
        success: function (data) {
          if (data === 'time out') {
            dummy.auth.setTimeout();
          } else {
            console.info("json data" + data);
            var result = JSON.parse(data);
            console.log("Result" + result); // var arr = [];
            // var str = "";
            // for (var i in result) {
            //     arr.push([i, result[i]]);
            // }
            // for(var i in arr){
            //     if(arr[i][0] === undefined){
            //         break;
            //     }
            //     else{
            //     }
            // }
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

    fetchFriends() {
      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/friends",
        data: {},
        dataType: "text",
        success: function (data) {
          if (data === 'time out') {
            dummy.auth.setTimeout();
          } else {
            console.info("json data" + data);
            var result = JSON.parse(data);
            console.log("Result" + result); // var arr = [];
            // var str = "";
            // for (var i in result) {
            //     arr.push([i, result[i]]);
            // }
            // for(var i in arr){
            //     if(arr[i][0] === undefined){
            //         break;friends
            //     }
            //     else{
            //     }
            // }
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      }); // console.log('after ajax call');
      // if(value === 'success'){
      //     this.auth.setProperty(value);
      // }
    }

    fetchPeople() {
      $.ajax({
        type: "POST",
        url: "/chatapp/people",
        data: {},
        dataType: "text",
        success: function (data) {
          if (data === 'time out') {
            dummy.auth.setTimeout();
          } else {
            var result = JSON.parse(data);
            console.log(result);
            var arr = [];
            var str = "";

            for (var i in result) {
              arr.push([i, result[i]]);
            }

            for (var i = 0; i < arr.length; i++) {
              console.log(arr[i]);
              console.log(arr[i][0]);

              if (arr[i][0] === undefined) {
                break;
              } else {
                if (arr[i][0].startsWith("user")) {
                  str += "<div class=\"inbox\">";
                  str += arr[i][1] + " send request<br>";
                  str += "</div>";
                } else if (arr[i][0].startsWith('frienda')) {
                  str += "<div class=\"inbox\">";
                  str += arr[i][1] + " chat<br>";
                  str += "</div>";
                } else {
                  str += "<div class=\"inbox\">";
                  str += arr[i][1] + " accept request<br>";
                  str += "</div>";
                }
              }
            }

            $('#peoplecontent').html(str);
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "auth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "findRequests", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "findRequests"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchFriends", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "fetchFriends"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchPeople", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "fetchPeople"), _class.prototype)), _class));
  _exports.default = NavBarComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NavBarComponent);
});
;define("chat-app/components/send-request", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div id="response">
  
  </div>
  <a {{action "sendRequest" @name}} href="#">
      <span class="icon">
          <ion-icon name="paper-plane-outline"></ion-icon>
      </span>
  </a>
  */
  {
    "id": "GeXqErk5",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[10,\"div\"],[14,1,\"response\"],[12],[2,\"\\n\\n\"],[13],[2,\"\\n\"],[11,\"a\"],[24,6,\"#\"],[4,[38,0],[[32,0],\"sendRequest\",[32,1]],null],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"paper-plane-outline\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/send-request.hbs"
    }
  });

  let SendRequestComponent = (_dec = Ember._action, (_class = class SendRequestComponent extends _component.default {
    sendRequest(name) {
      $.ajax({
        type: "POST",
        url: "/chatapp/sendrequest/" + name,
        data: {},
        dataType: "text",
        success: function (data) {
          console.log("Name is: " + name);
          console.log("data is:" + data);

          if (data === 'Request Sent') {
            $('#response').html("request sent");
          } else {
            console.log("request not sent");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "sendRequest", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "sendRequest"), _class.prototype)), _class));
  _exports.default = SendRequestComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SendRequestComponent);
});
;define("chat-app/components/sign-up", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form>
      <div class="text-field">
          <input type="text" id="username" required>
          <span></span>
          <label>UserName:</label>
      </div>
      <div id="result"></div>
      <div class="text-field">
          <input type="password" id="password" required>
          <span></span>
          <label>Password:</label>
      </div>
      <div class="signup_link">
          <input {{action "buttonClick" }}type="submit" value="submit">
      </div>
  
  </form>
  */
  {
    "id": "Q8S+vtup",
    "block": "{\"symbols\":[],\"statements\":[[10,\"form\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[10,\"input\"],[14,1,\"username\"],[14,\"required\",\"\"],[14,4,\"text\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"UserName:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,1,\"result\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[10,\"input\"],[14,1,\"password\"],[14,\"required\",\"\"],[14,4,\"password\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"Password:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"signup_link\"],[12],[2,\"\\n        \"],[11,\"input\"],[24,2,\"submit\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"buttonClick\"],null],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/sign-up.hbs"
    }
  });

  let SignUpCompComponent = (_dec = Ember.inject.service('index'), _dec2 = Ember._action, (_class = class SignUpCompComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "auth", _descriptor, this);
    }

    buttonClick() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/register",
        data: {
          username: username,
          password: password
        },
        dataType: "text",
        success: function (data) {
          console.log("hello" + username + password);
          var result = data;

          if (result == "valid") {
            dummy.auth.setSuccess();
          } else {
            $('#result').html("username already exists!!! Please create a new one");
            console.log(username + " exists");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      }); // if((username=="abc") && (password=="123")){
      //     window.location.href="success";
      // }
      // else{
      // window.location.href="authfailure";
      // }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "auth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonClick", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "buttonClick"), _class.prototype)), _class));
  _exports.default = SignUpCompComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SignUpCompComponent);
});
;define("chat-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("chat-app/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexController extends Ember.Controller {// @service index;
    // @action
    // buttonClick() {
    //     let username = document.getElementById("username").value;
    //     let password = document.getElementById("password").value;
    //     console.log("hello" + username + password);
    //     $.ajax({
    //         type: "POST",
    //         url: "/chatapp/auth",
    //         data: {
    //             username: username,
    //             password: password
    //         },
    //         dataType: "text",
    //         success: function (data) {
    //             console.log("hello" + username + password);
    //             var result = data;
    //             if (result == "valid") {
    //                 this.setProperty('success');
    //             // console.log("hello" + username + password);   let auth = this.get(this,'status')
    //             //    this.auth.setProperty('success');
    //             }
    //             else{
    //                 $('#result').html("Invalid username or password");
    //                 console.log(username + " or " + password + " is incorrect");
    //             }
    //         },
    //         error: function (jqXHR, testStatus, errorThrown) {
    //             console.log("error thrown: " + testStatus);
    //         }
    //     })
    // }
  }

  _exports.default = IndexController;
});
;define("chat-app/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("chat-app/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
});
;define("chat-app/helpers/app-version", ["exports", "chat-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("chat-app/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("chat-app/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("chat-app/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("chat-app/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("chat-app/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("chat-app/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("chat-app/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("chat-app/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("chat-app/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("chat-app/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("chat-app/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("chat-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("chat-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("chat-app/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("chat-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "chat-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("chat-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("chat-app/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("chat-app/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("chat-app/initializers/export-application-global", ["exports", "chat-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("chat-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("chat-app/models/index", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexModel extends _model.default {}

  _exports.default = IndexModel;
});
;define("chat-app/models/users", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UsersModel = (_dec = attr('string'), _dec2 = attr('string'), (_class = class UsersModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "check", _descriptor2, this);
    }

    async model() {
      let value = await fetch('/chatapp/people');
      let parsed = await value.json();
      return parsed;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "check", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UsersModel;
});
;define("chat-app/router", ["exports", "chat-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('index', {
      path: '/chatapp/'
    });
    this.route('signup', {
      path: '/chatapp/sign up'
    });
    this.route('chat', {
      path: '/chatapp/chat/:chat_id'
    });
    this.route('welcome', {
      path: '/chatapp/home'
    });
    this.route('friends', {
      path: '/friends'
    });
    this.route('people', {
      path: '/people'
    });
    this.route('signinsuccess', {
      path: '/chatapp/success'
    });
    this.route('requests');
  });
});
;define("chat-app/routes/chat", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ChatRoute extends Ember.Route {
    model(params) {
      const {
        chat_id
      } = params;
      return fetch('/chatapp/chat/' + chat_id).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log(json);
        return {
          chat_id,
          json
        };
      });
    } // async model() {
    //     return fetch('/chatapp/people').then(function(response) {
    //         return response.json();
    //     }).then(function(json) {
    //         return json;
    //     });
    // }


  }

  _exports.default = ChatRoute;
});
;define("chat-app/routes/friends", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class FriendsRoute extends Ember.Route {
    async model() {
      return fetch('/chatapp/friends').then(function (response) {
        console.log(response);
        return response.json();
      }).then(function (json) {
        return json;
      });
    }

  }

  _exports.default = FriendsRoute;
});
;define("chat-app/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexRoute extends Ember.Route {// @service('index') auth;
    // // @service router;
    // redirect(transition){
    //     console.log("from route")
    //     // this.router.transitionTo('welcome');
    //     if(this.auth.getProperty === 'success'){
    //         console.log("redirecting...");
    //         this.Route.transitionTo('welcome');
    //     }
    // }
    // @action
    // buttonClick(){
    //     let username = document.getElementById("username").value;
    //     let password = document.getElementById("password").value;
    //     $.ajax({
    //         type: "POST",
    //         url: "/chatapp/auth",
    //         data: {
    //             username: username,
    //             password: password
    //         },
    //         dataType: "text",
    //         success: function (data) {
    //             console.log("hello" + username + password);
    //             var result = data;
    //             if (result == "valid") {
    //                this.transitionTo('welcome');
    //             }
    //             else{
    //                 $('#result').html("Invalid username or password");
    //                 console.log(username + " or " + password + " is incorrect");
    //             }
    //         },
    //         error: function (jqXHR, testStatus, errorThrown) {
    //             console.log("error thrown: " + testStatus);
    //         }
    //     })
    // }
  }

  _exports.default = IndexRoute;
});
;define("chat-app/routes/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class PeopleRoute extends Ember.Route {
    async model() {
      return fetch('/chatapp/people').then(function (response) {
        return response.json();
      }).then(function (json) {
        // let category;
        // if(json.type == "user"){
        //     category = true;
        // }
        // else{
        //     category = false;
        // }
        return json;
      });
    }

  }

  _exports.default = PeopleRoute;
});
;define("chat-app/routes/requests", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class RequestsRoute extends Ember.Route {
    async model() {
      return fetch('/chatapp/request').then(function (response) {
        console.log(response);
        return response.json();
      }).then(function (json) {
        return json;
      });
    }

  }

  _exports.default = RequestsRoute;
});
;define("chat-app/routes/signinsuccess", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SigninsuccessRoute extends Ember.Route {}

  _exports.default = SigninsuccessRoute;
});
;define("chat-app/routes/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SignupRoute extends Ember.Route {}

  _exports.default = SignupRoute;
});
;define("chat-app/routes/welcome", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let WelcomeRoute = (_dec = Ember.inject.service, (_class = class WelcomeRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var temp = this;
      return fetch('/chatapp/people').then(function (response) {
        if (response.body == "time out") {
          temp.router.transitionTo('index');
          return "empty";
        } else {
          console.log(response);
          return response.json();
        }
      }).then(function (json) {
        return json;
      });
    } // try{
    //     const data = await fetch("/chatapp/people");
    //     console.log(data);
    //     console.log(data.statusText);
    // }
    // catch(error){
    //     console.log(error);
    // }
    // console.log(value.length);
    // console.log(JSON.parse(value));
    // for(var i in value){
    //     console.log(i.type);
    // }
    // var {data} = await value.JSON.parse();
    // // let { data } = JSON.parse(ja);
    // // let { data } = await value.json();
    // // console.log(ja);
    // console.log(data);
    // return data?.map(model => {
    //     let { attributes } = model;
    //     return { ...attributes };
    // });
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = WelcomeRoute;
});
;define("chat-app/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("chat-app/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chat-app/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("chat-app/services/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexService = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, (_class = class IndexService extends Ember.Service {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    setProperty(status) {
      this.set('status', status);
      this.router.transitionTo('welcome');
    }

    setSuccess() {
      this.router.transitionTo('signinsuccess');
    }

    setTimeout() {
      this.router.transitionTo('index');
    }

    setRedirect(to) {
      console.log(to);
      this.router.transitionTo('chat', to);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setProperty", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setProperty"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSuccess", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "setSuccess"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setTimeout", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "setTimeout"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setRedirect", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setRedirect"), _class.prototype)), _class));
  _exports.default = IndexService;
});
;define("chat-app/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("chat-app/templates/chat", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1pFNs+hb",
    "block": "{\"symbols\":[\"msg\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"chatbox\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"top-bar\"],[12],[2,\"\\n\"],[2,\"            \"],[10,\"div\"],[14,0,\"name\"],[12],[1,[35,2,[\"chat_id\"]]],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"middle\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"msg\"],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,2,[\"json\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,1],[[30,[36,0],[[32,1,[\"from\"]],[32,2,[\"chat_id\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                \"],[10,\"div\"],[14,0,\"incoming\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"bubble\"],[12],[2,\"\\n                        \"],[1,[32,1,[\"message\"]]],[2,\"\\n                    \"],[13],[2,\"\\n                \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                \"],[10,\"div\"],[14,0,\"outgoing\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"bubble\"],[12],[2,\"\\n                        \"],[1,[32,1,[\"message\"]]],[2,\"\\n                    \"],[13],[2,\"\\n                \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1]}]]],[2,\"            \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[8,\"chat-sender\",[],[[\"@name\"],[[34,2,[\"chat_id\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\\n\\n\"],[10,\"link\"],[14,6,\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\"],[14,\"rel\",\"stylesheet\"],[14,4,\"text/css\"],[12],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"model\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/chat.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/friends", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "A3cE6tIW",
    "block": "{\"symbols\":[\"friend\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n  \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n  \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n    \"],[10,\"ul\"],[12],[2,\"\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"welcome\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[10,\"a\"],[14,6,\"/chatapp/\"],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"log-out-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Logout\"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"\\n    Your Friends\\n  \"],[13],[2,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[2,\"\\n\\n      \"],[10,\"span\"],[14,0,\"title\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n      \"],[8,\"link-to\",[],[[\"@route\",\"@model\"],[\"chat\",[32,1,[\"name\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n          \"],[10,\"ion-icon\"],[14,3,\"chatbubble-ellipses-outline\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/friends.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9P3Ilhop",
    "block": "{\"symbols\":[],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"Chatty\"],[13],[2,\"\\n\\t\"],[8,\"auth\",[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rX8DwNwz",
    "block": "{\"symbols\":[\"friend\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n        \"],[10,\"ul\"],[12],[2,\"\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"welcome\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[10,\"a\"],[14,6,\"/chatapp/\"],[12],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"log-out-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Logout\"],[13],[2,\"\\n                \"],[13],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n        People\\n    \"],[13],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"people\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"li\"],[14,0,\"person\"],[12],[2,\"\\n\\n            \"],[10,\"span\"],[14,0,\"title\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"frienda\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"link-to\",[],[[\"@route\",\"@model\"],[\"chat\",[32,1,[\"name\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n                \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                    \"],[10,\"ion-icon\"],[14,3,\"chatbubble-ellipses-outline\"],[12],[13],[2,\"\\n                \"],[13],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"friendr\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            Request sent\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"user\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[8,\"send-request\",[],[[\"@name\"],[[32,1,[\"name\"]]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/people.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/requests", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Nhs9l52F",
    "block": "{\"symbols\":[\"friend\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n        \"],[10,\"ul\"],[12],[2,\"\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"welcome\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[10,\"a\"],[14,6,\"/chatapp/\"],[12],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"log-out-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Logout\"],[13],[2,\"\\n                \"],[13],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n        Your Requests\\n    \"],[13],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"people\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"title\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n      \"],[8,\"accept-request\",[],[[\"@name\"],[[32,1,[\"name\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/requests.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/signinsuccess", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DIJm08mV",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,1,\"center\"],[12],[2,\"\\n        \"],[10,\"br\"],[12],[13],[2,\"\\n        \"],[10,\"img\"],[14,\"src\",\"../assets/images/tick2.jpg\"],[14,\"alt\",\"tick\"],[12],[13],[2,\"\\n        \"],[10,\"h3\"],[12],[2,\"Your account created successfully!!!\"],[13],[2,\"\\n        \"],[10,\"h5\"],[12],[2,\"Now you are a new member:)\"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"signup_link\"],[12],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"Click me to go to login page\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/signinsuccess.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5pHZzEj6",
    "block": "{\"symbols\":[],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n\\t\"],[10,\"h1\"],[12],[2,\"SignUp\"],[13],[2,\"\\n    \"],[8,\"sign-up\",[],[[],[]],null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/signup.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/welcome", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Eg91CylE",
    "block": "{\"symbols\":[],\"statements\":[[10,\"link\"],[14,6,\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\"],[14,\"rel\",\"stylesheet\"],[14,4,\"text/css\"],[12],[13],[2,\"\\n\"],[8,\"nav-bar\",[],[[],[]],null],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n\\n    \"],[10,\"h3\"],[12],[2,\"\\n        Your Requests\\n    \"],[13],[2,\"\\n\"],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n        Your Friends\\n    \"],[13],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n        People\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"\\n\"],[3,\"<div class=\\\"requests\\\">\\n    <b>Your Requests!!!</b><br>\\n    <Requests />\\n</div>!\"],[2,\"\\n\\n\\n\\n\\n\"],[3,\"<div id=\\\"chatbox\\\">\\n\\n\\n   \\n   \\n    <div id=\\\"friendslist\\\">\\n        <div id=\\\"friends\\\">\\n            <div class=\\\"friend\\\">\\n\\n                <p>\\n                    <strong>Miro Badev</strong>\\n                    <span>mirobadev@gmail.com</span>\\n                </p>\\n            </div>\\n\\n            <div class=\\\"friend\\\">\\n\\n                <p>\\n                    <strong>Martin Joseph</strong>\\n                    <span>marjoseph@gmail.com</span>\\n                </p>\\n            </div>\\n\\n            <div class=\\\"friend\\\">\\n\\n                <p>\\n                    <strong>Tomas Kennedy</strong>\\n                    <span>tomaskennedy@gmail.com</span>\\n                </p>\\n            </div>\\n\\n            <div class=\\\"friend\\\">\\n\\n                <p>\\n                    <strong>Enrique Sutton</strong>\\n                    <span>enriquesutton@gmail.com</span>\\n                </p>\\n            </div>\\n\\n            <div class=\\\"friend\\\">\\n\\n                <p>\\n                    <strong> Darnell Strickland</strong>\\n                    <span>darnellstrickland@gmail.com</span>\\n                </p>\\n            </div>\\n\\n            <div id=\\\"search\\\">\\n                <input type=\\\"text\\\" id=\\\"searchfield\\\" value=\\\"Search contacts...\\\" />\\n            </div>\\n\\n        </div>\\n\\n    </div>\\n    \\n</div>\\n!\"],[2,\"\\n\"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js\"],[12],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/welcome.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("chat-app/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("chat-app/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("chat-app/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('chat-app/config/environment', [], function() {
  var prefix = 'chat-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("chat-app/app")["default"].create({"name":"chat-app","version":"0.0.0"});
          }
        
//# sourceMappingURL=chat-app.map
