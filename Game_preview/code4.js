gdjs.CreditsCode = {};
gdjs.CreditsCode.GDBoxObjects1= [];
gdjs.CreditsCode.GDBoxObjects2= [];
gdjs.CreditsCode.GDPlayerObjects1= [];
gdjs.CreditsCode.GDPlayerObjects2= [];
gdjs.CreditsCode.GDCrab_95collectibleObjects1= [];
gdjs.CreditsCode.GDCrab_95collectibleObjects2= [];
gdjs.CreditsCode.GDScore_95counterObjects1= [];
gdjs.CreditsCode.GDScore_95counterObjects2= [];
gdjs.CreditsCode.GDWall_95textureObjects1= [];
gdjs.CreditsCode.GDWall_95textureObjects2= [];
gdjs.CreditsCode.GDWhirly_95gigsawObjects1= [];
gdjs.CreditsCode.GDWhirly_95gigsawObjects2= [];
gdjs.CreditsCode.GDEnemy_95crabObjects1= [];
gdjs.CreditsCode.GDEnemy_95crabObjects2= [];
gdjs.CreditsCode.GDEnemy_95leftObjects1= [];
gdjs.CreditsCode.GDEnemy_95leftObjects2= [];
gdjs.CreditsCode.GDEnemy_95rightObjects1= [];
gdjs.CreditsCode.GDEnemy_95rightObjects2= [];
gdjs.CreditsCode.GDSpikesObjects1= [];
gdjs.CreditsCode.GDSpikesObjects2= [];
gdjs.CreditsCode.GDCeiling_95spikesObjects1= [];
gdjs.CreditsCode.GDCeiling_95spikesObjects2= [];
gdjs.CreditsCode.GDWallspikes_95rightObjects1= [];
gdjs.CreditsCode.GDWallspikes_95rightObjects2= [];
gdjs.CreditsCode.GDNewObjectObjects1= [];
gdjs.CreditsCode.GDNewObjectObjects2= [];
gdjs.CreditsCode.GDGo_95bObjects1= [];
gdjs.CreditsCode.GDGo_95bObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};


gdjs.CreditsCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_menu", false);
}}

}


}; //End of gdjs.CreditsCode.eventsList0x5b71c8


gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDBoxObjects1.length = 0;
gdjs.CreditsCode.GDBoxObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDCrab_95collectibleObjects1.length = 0;
gdjs.CreditsCode.GDCrab_95collectibleObjects2.length = 0;
gdjs.CreditsCode.GDScore_95counterObjects1.length = 0;
gdjs.CreditsCode.GDScore_95counterObjects2.length = 0;
gdjs.CreditsCode.GDWall_95textureObjects1.length = 0;
gdjs.CreditsCode.GDWall_95textureObjects2.length = 0;
gdjs.CreditsCode.GDWhirly_95gigsawObjects1.length = 0;
gdjs.CreditsCode.GDWhirly_95gigsawObjects2.length = 0;
gdjs.CreditsCode.GDEnemy_95crabObjects1.length = 0;
gdjs.CreditsCode.GDEnemy_95crabObjects2.length = 0;
gdjs.CreditsCode.GDEnemy_95leftObjects1.length = 0;
gdjs.CreditsCode.GDEnemy_95leftObjects2.length = 0;
gdjs.CreditsCode.GDEnemy_95rightObjects1.length = 0;
gdjs.CreditsCode.GDEnemy_95rightObjects2.length = 0;
gdjs.CreditsCode.GDSpikesObjects1.length = 0;
gdjs.CreditsCode.GDSpikesObjects2.length = 0;
gdjs.CreditsCode.GDCeiling_95spikesObjects1.length = 0;
gdjs.CreditsCode.GDCeiling_95spikesObjects2.length = 0;
gdjs.CreditsCode.GDWallspikes_95rightObjects1.length = 0;
gdjs.CreditsCode.GDWallspikes_95rightObjects2.length = 0;
gdjs.CreditsCode.GDNewObjectObjects1.length = 0;
gdjs.CreditsCode.GDNewObjectObjects2.length = 0;
gdjs.CreditsCode.GDGo_95bObjects1.length = 0;
gdjs.CreditsCode.GDGo_95bObjects2.length = 0;

gdjs.CreditsCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
