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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_replay-cta}", "click", function(sym, e) {
         
         // Replay from the beginning, regardless of current playing state 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'step1'
   (function(symbolName) {   
   
   })("step1");
   //Edge symbol end:'step1'

   //=========================================================
   
   //Edge symbol: 'replay-cta'
   (function(symbolName) {   
   
   })("replay-cta");
   //Edge symbol end:'replay-cta'

})(jQuery, AdobeEdge, "EDGE-6766476");