define(["backbone"],function(e){var t=e.View.extend({events:{"submit .follow":"followUser"},followUser:function(e){var t=$(e.currentTarget);return t.find(".btn").attr("disabled",!0),$.ajax({data:t.serialize(),type:"POST",url:t.attr("action"),success:_.bind(this.followUserSuccess,this)}),!1},followUserSuccess:function(){var e=this.$el.find("form.follow .btn"),t=this.$el.find("form.follow .action");t.val()=="follow"?(t.val("unfollow"),e.addClass("btn-danger").removeClass("btn-success").attr("value","Unfollow").attr("disabled",!1)):(t.val("follow"),e.removeClass("btn-danger").addClass("btn-success").attr("value","Follow").attr("disabled",!1))}});return t});