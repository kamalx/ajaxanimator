Ax.LayoutNorthPanel = Ext.extend(Ext.Panel,{
initComponent: function(){

Ext.apply(this,{
    region:"south",
	layout: "fit",
    collapsible:true,
    collapseMode: "mini",
    split:true,
	border: false,
  id: "timeline",
    height:100,
//    border:true,
	items: {xtype: "timeline", border: false}
  })
  this.initialConfig.collapsible = true; //bugfix from http://outroot.com/extjs/bug1/ 

   Ax.LayoutNorthPanel.superclass.initComponent.apply(this, arguments);
  }
  })
  
  Ext.reg("layoutnorth",Ax.LayoutNorthPanel)
