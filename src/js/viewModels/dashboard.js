/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils','require','exports','knockout','text!Modal/data.json','appController',"ojs/ojbootstrap",'ojs/ojarraydataprovider','ojs/ojknockout', "ojs/ojinputtext", "ojs/ojformlayout","ojs/ojselectsingle","ojs/ojbutton"],
 function(accUtils,require,exports,ko,file,app,Bootstrap,ArrayDataProvider) {
    function DashboardViewModel() {

      var data = JSON.parse(file)
      console.log(data)
      this.inputusernameValue = ko.observable()
      this.inputPassword = ko.observable()
      this.selectedvalue = ko.observable("")
      this.role = [
        { value: "Admin", label: "Admin" },
        { value: "User", label: "User" },
      ];
      console.log(data)


      this.selectedlist = new ArrayDataProvider(this.role, {
        keyAttributes: "value",
    });
    this.signIn = (event) => {
      if(data[0].username === this.inputusernameValue() && data[0].password === this.inputPassword() && data[0].role[0] === this.selectedvalue() ){
        console.log(this.inputusernameValue())
        app.goToPage('incidents')
       
      }else{
        console.log(this.inputusernameValue())
        app.goToPage('about')
      }
    }
    







      /*------------------Accutile--------------------------- */
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
