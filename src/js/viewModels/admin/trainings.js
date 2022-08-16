define([ "require", "exports", "knockout", "ojs/ojbootstrap","ojs/ojarraydataprovider","js/viewModels/dnd/DemoDataTransfer.js", "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojrowexpander", 'ojs/ojbutton', "ojs/ojtable", "ojs/ojlistviewdnd","ojs/ojlistitemlayout", "ojs/ojmenu"],
  function ( require, exports, ko, Bootstrap,  ArrayDataProvider,DemoDataTransfer_1, ) { 
    
  
    class CustomerViewModel {
      constructor(){
      this.sourceData = [
        {
            id: "i1",
            name: "Chris Black",
            title: "Oracle Cloud Infrastructure GTM Channel Director EMEA",
           
        },
        {
            id: "i2",
            name: "Christine Cooper",
            title: "Senior Principal Escalation Manager",
           
        },
        {
            id: "i3",
            name: "Chris Benalamore",
            title: "Area Business Operations Director EMEA & JAPAC",
           
        },
        {
            id: "i4",
            name: "Christopher Johnson",
            title: "Vice-President HCM Application Development",
           
        },
        {
            id: "i5",
            name: "Samire Christian",
            title: "Consulting Project Technical Manager",
           
        },
        {
            id: "i6",
            name: "Kurt Marchris",
            title: "Customer Service Analyst",
           
        },
        {
            id: "i7",
            name: "Jennifer Christy",
            title: "Area Business Operations Director EMEA & JAPAC",
          
        },
    ];
    this.targetData = [
        {
            id: "i8",
            name: "Zelda Christian Cooperman",
            title: "Senior Principal Escalation Manager",
          
        },
        {
            id: "i9",
            name: "Christian Wu",
            title: "Senior Principal Escalation Manager",
           
        },
        {
            id: "i10",
            name: "Christine Ellis",
            title: "Vice-President HCM Application Development",
          
        },
        {
            id: "i11",
            name: "Patrick Chrismon",
            title: "Consulting Project Technical Manager",
          
        },
        {
            id: "i12",
            name: "Alfred Marchris",
            title: "Principal Developer",
          
        },
    ];
    this.sourceArr = ko.observableArray(this.sourceData);
    this.sourceDataProvider = new ArrayDataProvider(this.sourceArr, {
        keyAttributes: "id",
    });
    this.targetArr = ko.observableArray(this.targetData);
    this.targetDataProvider = new ArrayDataProvider(this.targetArr, {
        keyAttributes: "id",
    });
    // This should really be just a DataTransfer object, but in order
    // to support Safari version < 14.1 that do not expose DataTransfer
    // constructor, a DataTransfer-like object is used instead.
    this.clipboard = new DemoDataTransfer_1.DemoDataTransfer();
    this.cutItem = ko.observable();
    // handle drop from drag and drop with mouse/touch
    this.handleDrop = (event, context) => {
        event.preventDefault();
        let index = -1;
        if (context.item) {
            const itemContext = document.getElementById("target").getContextByNode(context.item);
            index = itemContext.index;
            if (context.position === "after") {
                index += 1;
            }
        }
        this._handleDataTransfer(event.dataTransfer, index);
    };
    // handle drag start from drag and drop with mouse/touch
    this.handleDragStart = (event) => {
        const dataStr = event.dataTransfer.getData("application/ojlistviewitems+json");
        const data = JSON.parse(dataStr);
        this.dragItemId = data[0].id;
    };
    // handle drag end from drag and drop with mouse/touch
    this.handleDragEnd = (event) => {
        if (event.dataTransfer.dropEffect !== "none") {
            this._removeSourceItem(this.dragItemId);
        }
    };
    // common method to handle drop from drag and drop as well as from ctrl+v
    this._handleDataTransfer = (dataTransfer, index) => {
        const dataStr = dataTransfer.getData("application/ojlistviewitems+json");
        const data = JSON.parse(dataStr)[0];
        this._insertTargetItem(data, index);
    };
    // remove item from source array.  This is invoked by dragEnd as well as cut item
    // via context menu and keyboard
    this._removeSourceItem = (itemId) => {
        const arr = this.sourceArr();
        for (let j = 0; j < arr.length; j++) {
            // remove the selected items from array
            if (arr[j].id === itemId) {
                arr.splice(j, 1)[0];
                break;
            }
        }
        this.sourceArr.valueHasMutated();
    };
    // insert item to target array.  This is invoked by drop as well as paste item
    // via context menu and keyboard
    this._insertTargetItem = (data, index) => {
        const arr = this.targetArr();
        if (index === -1) {
            // empty list case
            arr.push(data);
        }
        else {
            arr.splice(index, 0, data);
        }
        this.targetArr.valueHasMutated();
    };
    this.handleMenuCut = (event) => {
        this._cutCurrentItem();
    };
    this.handleKeyCut = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "x") {
            this._cutCurrentItem();
        }
    };
    this._cutCurrentItem = () => {
        const listView = document.getElementById("source");
        const currentItem = listView.currentItem;
        const data = listView.getDataForVisibleItem({ key: currentItem });
        const jsonStr = JSON.stringify([data]);
        this.clipboard.setData("application/ojlistviewitems+json", jsonStr);
        this.cutItem(currentItem);
    };
    this.handleMenuPaste = (event) => {
        this._paste();
    };
    this.handleKeyPaste = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "v") {
            this._paste();
        }
    };
   
    this._paste = () => {
        const listView = document.getElementById("target");
        const currentItem = listView.currentItem;
        const index = this._findIndex(this.targetData, currentItem);
        this._handleDataTransfer(this.clipboard, index + 1);
        this._removeSourceItem(this.cutItem());
        this.cutItem(null);
    };
    this._findIndex = (arr, key) => {
        const keys = arr.map((data) => {
            return data.id;
        });
        return keys.indexOf(key);
    };

  }

  }
    return CustomerViewModel;
  }
);
