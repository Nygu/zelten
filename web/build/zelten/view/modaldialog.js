define(["backbone"],function(e){var t=e.View.extend({events:{"click .cancel":"cancelAction","click .action-success":"successAction"},initialize:function(e){this.success=e.success,this.params=e.params,this.template=_.template($("#modal-confirm-dialog").html()||"")},cancelAction:function(e){return this.$el.modal("hide"),this.remove(),!1},successAction:function(e){return this.success(e),this.cancelAction(),!1},render:function(){var e=$(this.template(this.params));this.setElement(e),e.modal("show"),$("body").append(e)}});return t});