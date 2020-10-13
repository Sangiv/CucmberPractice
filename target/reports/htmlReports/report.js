$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("task1.feature");
formatter.feature({
  "line": 1,
  "name": "Can we log in?",
  "description": "",
  "id": "can-we-log-in?",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create a User",
  "description": "",
  "id": "can-we-log-in?;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the add user page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter my \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I will be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "can-we-log-in?;create-a-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "can-we-log-in?;create-a-user;;1"
    },
    {
      "cells": [
        "root",
        "root"
      ],
      "line": 12,
      "id": "can-we-log-in?;create-a-user;;2"
    },
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 13,
      "id": "can-we-log-in?;create-a-user;;3"
    },
    {
      "cells": [
        "gold",
        "fish"
      ],
      "line": 14,
      "id": "can-we-log-in?;create-a-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8456417400,
  "status": "passed"
});
formatter.before({
  "duration": 5876399400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create a User",
  "description": "",
  "id": "can-we-log-in?;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the add user page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"root\" and \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter my \"root\" and \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "task1test.i_am_on_the_add_user_page()"
});
formatter.result({
  "duration": 735621300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 11
    },
    {
      "val": "root",
      "offset": 22
    }
  ],
  "location": "task1test.i_enter_a_and(String,String)"
});
formatter.result({
  "duration": 8058587600,
  "status": "passed"
});
formatter.match({
  "location": "task1test.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 218378900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 12
    },
    {
      "val": "root",
      "offset": 23
    }
  ],
  "location": "task1test.i_enter_my_and(String,String)"
});
formatter.result({
  "duration": 7792235700,
  "status": "passed"
});
formatter.match({
  "location": "task1test.i_will_be_logged_in()"
});
formatter.result({
  "duration": 2756005800,
  "status": "passed"
});
formatter.after({
  "duration": 167791900,
  "status": "passed"
});
formatter.after({
  "duration": 250947700,
  "status": "passed"
});
formatter.before({
  "duration": 5677441200,
  "status": "passed"
});
formatter.before({
  "duration": 5649190200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a User",
  "description": "",
  "id": "can-we-log-in?;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the add user page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"user\" and \"pass\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter my \"user\" and \"pass\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "task1test.i_am_on_the_add_user_page()"
});
formatter.result({
  "duration": 496242700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 11
    },
    {
      "val": "pass",
      "offset": 22
    }
  ],
  "location": "task1test.i_enter_a_and(String,String)"
});
formatter.result({
  "duration": 8066967000,
  "status": "passed"
});
formatter.match({
  "location": "task1test.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 171635800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 12
    },
    {
      "val": "pass",
      "offset": 23
    }
  ],
  "location": "task1test.i_enter_my_and(String,String)"
});
formatter.result({
  "duration": 7774309500,
  "status": "passed"
});
formatter.match({
  "location": "task1test.i_will_be_logged_in()"
});
formatter.result({
  "duration": 2798123500,
  "status": "passed"
});
formatter.after({
  "duration": 165144800,
  "status": "passed"
});
formatter.after({
  "duration": 314054400,
  "status": "passed"
});
formatter.before({
  "duration": 5629055600,
  "status": "passed"
});
formatter.before({
  "duration": 5698988900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create a User",
  "description": "",
  "id": "can-we-log-in?;create-a-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the add user page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"gold\" and \"fish\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter my \"gold\" and \"fish\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "task1test.i_am_on_the_add_user_page()"
});
formatter.result({
  "duration": 429618600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gold",
      "offset": 11
    },
    {
      "val": "fish",
      "offset": 22
    }
  ],
  "location": "task1test.i_enter_a_and(String,String)"
});
formatter.result({
  "duration": 8292539000,
  "status": "passed"
});
formatter.match({
  "location": "task1test.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 159854500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gold",
      "offset": 12
    },
    {
      "val": "fish",
      "offset": 23
    }
  ],
  "location": "task1test.i_enter_my_and(String,String)"
});
formatter.result({
  "duration": 7854013500,
  "status": "passed"
});
formatter.match({
  "location": "task1test.i_will_be_logged_in()"
});
formatter.result({
  "duration": 2746162400,
  "status": "passed"
});
formatter.after({
  "duration": 170766200,
  "status": "passed"
});
formatter.after({
  "duration": 248065900,
  "status": "passed"
});
});