/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(["require", "exports","ojs/ojcorerouter", "knockout", "ojs/ojbootstrap","ojs/ojarraydataprovider","ojs/ojmodulerouter-adapter",
"ojs/ojknockoutrouteradapter","ojs/ojurlparamadapter","ojs/ojknockout","ojs/ojnavigationlist","ojs/ojmodule-element"],
 function(require, exports, CoreRouter, ko, Bootstrap,ArrayDataProvider,ModuleRouterAdapter,KnockoutRouterAdapter,UrlParamAdapter,) {
    class AboutViewModel {
      constructor(args){
        this.args = args
        var self = this
      

      self.childRoutes = [
        {path:" ",redirect:"kits"},
        {path:'kits',detail:{label:'Kits'}},
        {path:'branches',detail:{label:'Branches'}},
        {path:'enrollment',detail:{label:'Enrollment'}},
        {path:'sites',detail:{label:'Sites'}},
        {path:'role',detail:{label:'Roles'}},
        {path:'trainings',detail:{label:'Trainings'}}
      ]; 


      self.childdataProvider = new ArrayDataProvider(self.childRoutes.slice(1),{keyAttributes:'path'})
      self.childRouter = this.args.parentRouter.createChildRouter(self.childRoutes)

      // Create ModuleRouterAdapter instance
      self.childModule = new ModuleRouterAdapter(self.childRouter,{
        viewPath: "views/admin/",
        viewModelPath:"viewModels/admin/" ,
      });

      
       // Create an observable to react to the current router state path
       self.selection = new KnockoutRouterAdapter(self.childRouter);
       // Synchronize the router, causing it to go to its default route
       self.childRouter.sync();
    }
  }
  return AboutViewModel;
 }
);
