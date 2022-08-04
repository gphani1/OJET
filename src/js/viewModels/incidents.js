/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here as User Role
 */
define(['../accUtils',"require", "exports", "knockout", "ojs/ojbootstrap","ojs/ojarraydataprovider","ojs/ojknockout","ojs/ojlabelvalue","ojs/ojinputtext",'ojs/ojlabel','ojs/ojformlayout',
           "ojs/ojdatetimepicker","ojs/ojradioset","ojs/ojcheckboxset",'ojs/ojbutton'],
 function(accUtils,require, exports, ko, Bootstrap,ArrayDataProvider) {
    function IncidentsViewModel() {

      this.dateValue = ko.observable()
      this.inputInitialsValue = ko.observable()
      this.inputweightValue = ko.observable()
      this.inputdatemedicationValue = ko.observable()
      this.inputgenderValue = ko.observable()
      this.inputbirthValue = ko.observable()
      this.inputageValue = ko.observable()
      this.symptomValue = ko.observable()
      this.symptomoptions = [
        {value:"nausea",label:"Nausea"},
        {value:"headache",label:"Head ache"},
        {value:"weightloss",label:"Weight loss"}
        
      ]
      this.symptomopt = ko.observable(new ArrayDataProvider(this.symptomoptions,{keyAttribute:"value"}))


      this.radiosurgeryValues = ko.observable()
      this.surgeryoptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ]

      this.surgeryopt = ko.observable(new ArrayDataProvider(this.surgeryoptions,{ keyAttribute:"value"}) )

      this.submit = () => {
        console.log("submit form")
      }



























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
    return IncidentsViewModel;
  }
);
