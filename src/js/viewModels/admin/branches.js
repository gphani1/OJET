/*--'../accUtils',---*/
define(["require", "exports", "knockout", "ojs/ojbootstrap","ojs/ojarraydataprovider","ojs/ojknockout","ojs/ojinputtext",'ojs/ojlabel','ojs/ojformlayout',
"ojs/ojdatetimepicker","ojs/ojradioset","ojs/ojcheckboxset",'ojs/ojbutton',"ojs/ojinputnumber",'ojs/ojselectsingle'],
 function(require, exports, ko, Bootstrap,ArrayDataProvider) {
    function BranchesViewModel() {
      
      this.inputtitleValue = ko.observable("Branch 1")
      this.inputidValue = ko.observable("BR1")
      this.radiobranchValues = ko.observable()
      this.branchoptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ]

      this.branchopt = new ArrayDataProvider(this.branchoptions,{keyAttributes:"value"})
      this.inputCountValue = ko.observable(2)

      this.subjectValue = ko.observable([])
      this.subjectoptions = [
        {value:"treatmentarm",label:"Treatment Arm"},
        {value:"formquestion",label:"Form Question"}
      ]

      this.subjectopt = new ArrayDataProvider(this.branchoptions,{keyAttributes:"value"})

      this.formoptions = [
        { value: "readings", label: "Readings" },
        { value: "editing", label: "editings" },
        { value: "writing", label: "Writing" },
       
    ];
    this.formopt = new ArrayDataProvider(this.formoptions, {
        keyAttributes: "value",
    });

    this.questionoptions = [
      {value:"ill", label:"Any illness ?"},
      { value: "FF", label: "Firefox" },
      { value: "CH", label: "Chrome" },
      { value: "OP", label: "Opera" },
      { value: "SA", label: "Safari" },
    ];

    this.questionopt = new ArrayDataProvider(this.questionoptions,{keyAttributes:"value"})

    this.answeroptions = [
      {value:"yes",label:"Yes"},
      {value:"no",label:"No"}
    ];

    this.answeropt = new ArrayDataProvider(this.answeroptions,{keyAttributes:"value"})

    this.visitoptions = [
      {value:"select",label:"Select"},
      {value:"visited",label:"visited"},
      {value:"not",label:"Not Visited"}
    ];

    this.visitopt = new ArrayDataProvider(this.visitoptions,{keyAttributes:"value"})
      
      
    this.cancel = () =>{

    }
    this.saveanother = () => {}

    this.save = () => {}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
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
      //     
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
    return BranchesViewModel;
  }
);
