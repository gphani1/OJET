/*----"text!../Modal/kitsData.json",*/
define([ "require", "exports", "knockout", "ojs/ojbootstrap","text!../../Modal/kitsData.json", "ojs/ojarraydataprovider", "ojs/ojknockout",  
 'ojs/ojbutton',"ojs/ojmenu"],
 function(require, exports, ko, Bootstrap, kitsData,ArrayDataProvider) { 
    function KitsViewModel() {

      this.menuItems = [
        { id: "kitA", label: "Kit A",  disabled: false },
        {
            id: "kitB",
            label: "Kit B",
            disabled: false,
        },
        {
            id: "kitC",
            label: "Kit C",
            disabled: false,
        },
        {
            id: "kitD",
            label: "Kit D",
            disabled: true,
        },
    ];

    this.distributionValue = ko.observable("Blinded");
    this.descriptionnValue = ko.observable("Kit A Description");
    this.storageValue = ko.observable(" Ambient (15-28c)");
    this.typeValue = ko.observable("Bottle")
    this.minkitsValue = ko.observable(1)
    this.unitsValue = ko.observable(1)
    

    this.kitsDataArray = JSON.parse(kitsData)
    this.kitsDataProvider = new ArrayDataProvider(this.kitsDataArray,{keyAtrributes:"id"})


























      // this.connected = () => {
      //   accUtils.announce('Incidents page loaded.', 'assertive');
      //   document.title = "Incidents";
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
    return KitsViewModel;
  }
);
