/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define([ "require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojflattenedtreedataproviderview", "ojs/ojarraytreedataprovider", "text!../../Modal/enrollment.json","ojs/ojknockout", "ojs/ojinputtext", "ojs/ojrowexpander", 'ojs/ojbutton', "ojs/ojtable", "ojs/ojinputnumber", 'ojs/ojselectsingle', "ojs/ojswitch"],
  function ( require, exports, ko, Bootstrap, FlattenedTreeDataProviderView, ArrayTreeDataProvider, enrollmentData,) { 
    // ojmodel_1, DemoDelayingDataProvider, CollectionDataProvider, MockPagingRESTServer,"ojs/ojmodel", "dataProvider/DemoDelayingDataProvider", "ojs/ojcollectiondataprovider","MockPagingRESTServer",
  
    function enrollmentViewModel() {

      // this.server = new MockPagingRESTServer(JSON.parse(enrollmentData), {
      //   collProp: "enrollment",
      //   id: "t1",
      //   noTotalResults: true,
      // });

      // this.model = ojmodel_1.Model.extend({
      //   idAttribute: "t1",
      // });
      // this.collection = new ojmodel_1.Collection(null, {
      //   url: this.server.getURL(),
      //   fetchSize: 15,
      //   model: this.model,
      // });

      // this.dataProvider = ko.observable(new DemoDelayingDataProvider(new CollectionDataProvider(this.collection)));






      this.dataProvider = ko.observable();
      //  console.log(JSON.parse(enrollmentData));

      this.arrayTreeDataProvider = new ArrayTreeDataProvider(JSON.parse(enrollmentData), {
        keyAttributes: "id",
      });
      this.dataProvider(new FlattenedTreeDataProviderView(this.arrayTreeDataProvider));

















     
     
    }

    
    return enrollmentViewModel;
  }
);
