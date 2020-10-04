gdjs.Main_95menuCode = {};
gdjs.Main_95menuCode.GDBoxObjects1= [];
gdjs.Main_95menuCode.GDBoxObjects2= [];
gdjs.Main_95menuCode.GDPlayerObjects1= [];
gdjs.Main_95menuCode.GDPlayerObjects2= [];
gdjs.Main_95menuCode.GDCrab_95collectibleObjects1= [];
gdjs.Main_95menuCode.GDCrab_95collectibleObjects2= [];
gdjs.Main_95menuCode.GDScore_95counterObjects1= [];
gdjs.Main_95menuCode.GDScore_95counterObjects2= [];
gdjs.Main_95menuCode.GDWall_95textureObjects1= [];
gdjs.Main_95menuCode.GDWall_95textureObjects2= [];
gdjs.Main_95menuCode.GDWhirly_95gigsawObjects1= [];
gdjs.Main_95menuCode.GDWhirly_95gigsawObjects2= [];
gdjs.Main_95menuCode.GDEnemy_95crabObjects1= [];
gdjs.Main_95menuCode.GDEnemy_95crabObjects2= [];
gdjs.Main_95menuCode.GDGame_95titleObjects1= [];
gdjs.Main_95menuCode.GDGame_95titleObjects2= [];
gdjs.Main_95menuCode.GDPodnadpisObjects1= [];
gdjs.Main_95menuCode.GDPodnadpisObjects2= [];
gdjs.Main_95menuCode.GDLogoObjects1= [];
gdjs.Main_95menuCode.GDLogoObjects2= [];
gdjs.Main_95menuCode.GDMenu_95selectObjects1= [];
gdjs.Main_95menuCode.GDMenu_95selectObjects2= [];
gdjs.Main_95menuCode.GDNewObjectObjects1= [];
gdjs.Main_95menuCode.GDNewObjectObjects2= [];
gdjs.Main_95menuCode.GDNewObject2Objects1= [];
gdjs.Main_95menuCode.GDNewObject2Objects2= [];

gdjs.Main_95menuCode.conditionTrue_0 = {val:false};
gdjs.Main_95menuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95menuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_95menuCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.Main_95menuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.Main_95menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


{


gdjs.Main_95menuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
}if (gdjs.Main_95menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


}; //End of gdjs.Main_95menuCode.eventsList0x5b71c8


gdjs.Main_95menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95menuCode.GDBoxObjects1.length = 0;
gdjs.Main_95menuCode.GDBoxObjects2.length = 0;
gdjs.Main_95menuCode.GDPlayerObjects1.length = 0;
gdjs.Main_95menuCode.GDPlayerObjects2.length = 0;
gdjs.Main_95menuCode.GDCrab_95collectibleObjects1.length = 0;
gdjs.Main_95menuCode.GDCrab_95collectibleObjects2.length = 0;
gdjs.Main_95menuCode.GDScore_95counterObjects1.length = 0;
gdjs.Main_95menuCode.GDScore_95counterObjects2.length = 0;
gdjs.Main_95menuCode.GDWall_95textureObjects1.length = 0;
gdjs.Main_95menuCode.GDWall_95textureObjects2.length = 0;
gdjs.Main_95menuCode.GDWhirly_95gigsawObjects1.length = 0;
gdjs.Main_95menuCode.GDWhirly_95gigsawObjects2.length = 0;
gdjs.Main_95menuCode.GDEnemy_95crabObjects1.length = 0;
gdjs.Main_95menuCode.GDEnemy_95crabObjects2.length = 0;
gdjs.Main_95menuCode.GDGame_95titleObjects1.length = 0;
gdjs.Main_95menuCode.GDGame_95titleObjects2.length = 0;
gdjs.Main_95menuCode.GDPodnadpisObjects1.length = 0;
gdjs.Main_95menuCode.GDPodnadpisObjects2.length = 0;
gdjs.Main_95menuCode.GDLogoObjects1.length = 0;
gdjs.Main_95menuCode.GDLogoObjects2.length = 0;
gdjs.Main_95menuCode.GDMenu_95selectObjects1.length = 0;
gdjs.Main_95menuCode.GDMenu_95selectObjects2.length = 0;
gdjs.Main_95menuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_95menuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_95menuCode.GDNewObject2Objects1.length = 0;
gdjs.Main_95menuCode.GDNewObject2Objects2.length = 0;

gdjs.Main_95menuCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['Main_95menuCode'] = gdjs.Main_95menuCode;
