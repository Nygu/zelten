define(["backbone"],function(e){var t=e.Collection.extend({comparator:function(e){return e.get("published")*-1}});return t});