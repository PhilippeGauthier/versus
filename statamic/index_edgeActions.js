/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      


      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Replay}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(205);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "click", function(sym, e) {
         sym.play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'cover-page'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("cover-page");
   //Edge symbol end:'cover-page'

   //=========================================================
   
   //Edge symbol: 'main-screen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("main-screen");
   //Edge symbol end:'main-screen'

   //=========================================================
   
   //Edge symbol: 'click'
   (function(symbolName) {   
   
   })("click");
   //Edge symbol end:'click'

   //=========================================================
   
   //Edge symbol: 'app'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("app");
   //Edge symbol end:'app'

   //=========================================================
   
   //Edge symbol: 'asddsa'
   (function(symbolName) {   
   
   })("asddsa");
   //Edge symbol end:'asddsa'

})(jQuery, AdobeEdge, "juxtapoz");