define(['../accUtils',"require", "exports", "knockout", "ojs/ojbootstrap","ojs/ojarraydataprovider","ojs/ojknockout","ojs/ojlabelvalue","ojs/ojinputtext",'ojs/ojlabel','ojs/ojformlayout',
           "ojs/ojdatetimepicker","ojs/ojradioset","ojs/ojcheckboxset",'ojs/ojbutton'],
 function(accUtils,require, exports, ko, Bootstrap,ArrayDataProvider) {
    function KitsViewModel() {

      



























      this.connected = () => {
        accUtils.announce('Incidents page loaded.', 'assertive');
        document.title = "Incidents";
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
    return KitsViewModel;
  }
);
