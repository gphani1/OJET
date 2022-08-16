define([ "require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojasyncvalidator-regexp", "text!../../Modal/shipment.json", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojinputtext", 'ojs/ojlabel', 'ojs/ojformlayout',
  "ojs/ojdatetimepicker", "ojs/ojradioset","ojs/ojvalidationgroup","ojs/ojselectcombobox", "ojs/ojcheckboxset", "ojs/ojtrain", 'ojs/ojbutton', "ojs/ojtable", "ojs/ojinputnumber", 'ojs/ojselectsingle', "ojs/ojinputsearch", "ojs/ojmenu"],
  function ( require, exports, ko, Bootstrap, AsyncRegExpValidator, shipmentData, ArrayDataProvider) {
    function SitesViewModel() {

      this.selectedStepValue = ko.observable("stp1");
     // this.selectedStepLabel = ko.observable("Settings");
      // this.selectedStepFormLabel = ko.observable("Please fill in your full name");
      this.inputprefixValue = ko.observable();
      this.inputfirstNameValue = ko.observable();
      this.inputlastNameValue = ko.observable();
      this.inputsiteNameValue = ko.observable();
      this.inputsiteIdValue = ko.observable();
      this.modeValue = ko.observable(["test"])
      this.radiodrugValues = ko.observable("")
      this.deaValue = ko.observable()

      this.statusoptions = [
        { value: "new", label: "New" },
        { value: "editing", label: "editings" },
        { value: "writing", label: "Writing" },
       
    ];
    this.statusopt = new ArrayDataProvider(this.statusoptions, {keyAttributes: "value"});

    this.modeoptions = [
      {value:"test", label:"Testing"},
      {value:"undertest", label:"UnderTesting"}
    ];

    this.modeopt = new ArrayDataProvider(this.modeoptions,{keyAttributes:"value"})

    this.drugoptions = [
      {value:"yes",label:"Yes"},
      {value:"no",label:"No"}
    ];
    this.drugopt = new ArrayDataProvider(this.drugoptions,{keyAttributes:"value"})

      // this.email = ko.observable();
      // this.telephoneNumber = ko.observable();
      /*----------site Address-----------*/
      this.addOneValue = ko.observable("Bangalore")
      this.addTwoValue = ko.observable("")
      this.cityValue = ko.observable("Bangalore")
      this.countryValue = ko.observable(["india"])
      this.provinceValue = ko.observable("")
      this.ZipValue = ko.observable("")
      this.timeZone = ko.observable()
      this.phoneValue = ko.observable()
      this.faxValue = ko.observable()
      this.emailValue = ko.observable()
      this.countryOptions = [
        {value:"india",label:"India"},
        {value:"canada",label:"Canada"}
      ];
      this.timeZoneOptions = [
        {value:"GMT",label:"GMT 5"},
        {value:"pacific",label:"Pacific"}
      ]

      this.countryopt = new ArrayDataProvider(this.countryOptions,{keyAttributes:"value"})
      this.timeZoneopt = new ArrayDataProvider(this.timeZoneOptions,{keyAttributes:"value"})


      /*---------Shipment Page---------*/ 
      this.shipmentValue = ko.observable();
      this.recordValue = ko.observable();
      this.filterstatusValue = ko.observable()
      this.shipmentArray = JSON.parse(shipmentData);
      this.menuItems = [
        { id: "address", label: "Address",  disabled: false },
        {
            id: "email",
            label: "Email",
            disabled: false,
        },
        {
            id: "fax",
            label: "Fax",
            disabled: false,
        },
        
    ];
    this.columnsArray = [
      {headerText: "Shipment Id", field: "ShipmentId",id:"shipId", "width":"20rem"},
      {headerText: "Site", field: "Site",id: "site","width":"10rem"},
      {headerText: "Status", field: "Status",id: "site","width":"10rem"},
      {headerText: "Create Date", field: "createddate",id: "cdate",},
      {headerText: "Ship Date", field: "ShipDate", id: "shipDate","width":"10rem"},
      {headerText: "Tracking Number", field: "TrackingNumber", id: "trackNum", template:'cellTemplate',}
    ];

    this.dataprovider = new ArrayDataProvider(this.shipmentArray, {
      keyAttributes: "ShipmentId",
      
  });



      this.isFormReadonly = ko.observable(false);
      this.stepArray = ko.observableArray([
          { label: "Settings", id: "stp1" },
          { label: "Site Address", id: "stp2" },
          { label: "Shipping", id: "stp3" },
          { label: "Finish", id: "stp4" },
      ]);
      // this.regExpValidator = new AsyncRegExpValidator({
      //     pattern: "[a-zA-Z ,.'-]{1,}",
      //     hint: "1 or more letters",
      //     messageDetail: "You must enter at least 1 letter",
      // });
      // this.emailRegExpValidator = new AsyncRegExpValidator({
      //     pattern: ".+@.+..+",
      //     hint: "email format",
      //     messageDetail: "Invalid email format",
      // });
      //It is being called by the train to make sure the form is valid before moving on to the next step.
      // this.validate = (event) => {
      //     let nextStep = event.detail.toStep;
      //     let previousStep = event.detail.fromStep;
      //     var tracker = document.getElementById("tracker");
      //     if (tracker == null) {
      //         return;
      //     }
      //     var train = document.getElementById("train");
      //     if (tracker.valid === "valid") {
      //         //The previous step will have a confirmation message type icon
      //         previousStep.messageType = "confirmation";
      //         train.updateStep(previousStep.id, previousStep);
      //         //Now the clicked step could be selected
      //         this.selectedStepValue(nextStep.id);
      //         return;
      //     }
      //     else {
      //         //The ojBeforeSelect can be cancelled by calling event.preventDefault().
      //         event.preventDefault();
      //         //The previous step will have an error message type icon
      //         previousStep.messageType = "error";
      //         train.updateStep(previousStep.id, previousStep);
      //         // show messages on all the components
      //         // that have messages hidden.
      //         setTimeout(function () {
      //             tracker.showMessages();
      //             tracker.focusOn("@firstInvalidShown");
      //         }, 0);
      //         return;
      //     }
      // };
    
      this.finish = (event) => {
          var train = document.getElementById("train");
          let finalStep = train.getStep("stp4");
          //The final step will have a confirmation message type icon
          if (finalStep != null) {
              finalStep.messageType = "confirmation";
              train.updateStep(finalStep.id, finalStep);
          }
      };

      this.nextStep = () => {
        const train = document.getElementById('train');
        const next = train.getNextSelectableStep();
        if (next != null ) {
            this.selectedStepValue(next);
            //this.selectedLabel(train.getStep(next).label);
        }
    };
    this.previousStep = () => {
      const train = document.getElementById('train');
      const prev = train.getPreviousSelectableStep();
      if (prev != null) {
          this.selectedStepValue(prev);
         // this.selectedLabel(train.getStep(prev).label);
      }
  };
  this.cancelStep= () => {
    console.log(cancel)
  }



























      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      // this.connected = () => {
      //   accUtils.announce('Customers page loaded.', 'assertive');
      //   document.title = "Customers";
      //   // Implement further logic if needed
      // };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      // this.disconnected = () => {
      //   // Implement if needed
      // };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      // this.transitionCompleted = () => {
      //   // Implement if needed
      // };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return SitesViewModel;
  }
);
