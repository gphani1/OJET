define(['../accUtils',"require", "exports", "knockout", "ojs/ojbootstrap","text!../Modal/role.json","ojs/ojarraydataprovider","ojs/ojknockout","ojs/ojinputtext",'ojs/ojlabel','ojs/ojformlayout',
"ojs/ojdatetimepicker","ojs/ojradioset","ojs/ojcheckboxset",'ojs/ojbutton',"ojs/ojtable","ojs/ojinputnumber",'ojs/ojselectsingle', "ojs/ojinputsearch"],
 function(accUtils,require, exports, ko, Bootstrap,roleData,ArrayDataProvider) {
    function RoleViewModel() {
    
      this.roleArray = JSON.parse(roleData);
              this.dataprovider = new ArrayDataProvider(this.roleArray, {
                  keyAttributes: 'role'
      });



     this.selectVal = ko.observable()
    this.filteroptions = [
      {value:"sponser",label:"Sponser"},
      {value:"site",label:"Site"},
      {value:"design",label:"Design"}
     ]; 

     this.filteropt = new ArrayDataProvider(this.filteroptions,{keyAttributes:"value"})

     this.statusVal = ko.observable()
     this.statusoptions = [
      {value:"started",label:"Started"},
      {value:"progress",label:"Inprogress"},
      {value:"complete",label:"Completed"}
     ];
     this.statusopt = new ArrayDataProvider(this.statusoptions,{keyAttributes:"value"})

     this.value = ko.observable()
     this.handleValueAction = ()=>{

     }


     
     this.tableColumns = ko.computed(() => {
      return[
        {
          headerText: 'Study role',
          field: 'role',
          id: 'roleId'
        },
        {
          headerText: 'Type',
          field: 'Type',
          id: 'typeId'
        }
      ]
     })
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
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
      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
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
    return RoleViewModel;
  }
);
