define(['../accUtils','require',"exports",'knockout',"ojs/ojbootstrap",'ojs/ojarraydataprovider','ojs/ojknockout', "ojs/ojinputtext", "ojs/ojformlayout","ojs/ojselectsingle","ojs/ojbutton"],
 function(accUtils,require,exports,ko,Bootstrap,ArrayDataProvider) {
    function RegisterViewModel() {

      this.inputusernameValue = ko.observable("")
      this.inputemailValue = ko.observable("")
      this.inputPassword = ko.observable("")
      this.inputConfirmPassword = ko.observable("")
      this.selectedvalue = ko.observable()
      this.role = [
        { value: "Admin", label: "Admin" },
        { value: "User", label: "User" },
      ];

      this.selectedlist = new ArrayDataProvider(this.role, {
        keyAttributes: "value",
    });
    this.signUp = function(){
        // var saveData = ko.toJSON(RegisterViewModel)
        // var JsonData = JSON.parse(saveData)
        // console.log(JsonData)
      console.log("signUp clicked");
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
    return RegisterViewModel;
  }
);