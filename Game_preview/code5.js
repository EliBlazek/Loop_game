gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDBoxObjects1= [];
gdjs.New_32sceneCode.GDBoxObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDCrab_95collectibleObjects1= [];
gdjs.New_32sceneCode.GDCrab_95collectibleObjects2= [];
gdjs.New_32sceneCode.GDScore_95counterObjects1= [];
gdjs.New_32sceneCode.GDScore_95counterObjects2= [];
gdjs.New_32sceneCode.GDWall_95textureObjects1= [];
gdjs.New_32sceneCode.GDWall_95textureObjects2= [];
gdjs.New_32sceneCode.GDWhirly_95gigsawObjects1= [];
gdjs.New_32sceneCode.GDWhirly_95gigsawObjects2= [];
gdjs.New_32sceneCode.GDEnemy_95crabObjects1= [];
gdjs.New_32sceneCode.GDEnemy_95crabObjects2= [];
gdjs.New_32sceneCode.GDEnemy_95leftObjects1= [];
gdjs.New_32sceneCode.GDEnemy_95leftObjects2= [];
gdjs.New_32sceneCode.GDEnemy_95rightObjects1= [];
gdjs.New_32sceneCode.GDEnemy_95rightObjects2= [];
gdjs.New_32sceneCode.GDSpikesObjects1= [];
gdjs.New_32sceneCode.GDSpikesObjects2= [];
gdjs.New_32sceneCode.GDCeiling_95spikesObjects1= [];
gdjs.New_32sceneCode.GDCeiling_95spikesObjects2= [];
gdjs.New_32sceneCode.GDWallspikes_95rightObjects1= [];
gdjs.New_32sceneCode.GDWallspikes_95rightObjects2= [];
gdjs.New_32sceneCode.GDTextObjects1= [];
gdjs.New_32sceneCode.GDTextObjects2= [];
gdjs.New_32sceneCode.GDScore_95evalObjects1= [];
gdjs.New_32sceneCode.GDScore_95evalObjects2= [];
gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects1= [];
gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects2= [];
gdjs.New_32sceneCode.GDCGObjects1= [];
gdjs.New_32sceneCode.GDCGObjects2= [];
gdjs.New_32sceneCode.GDB_95to_95menuObjects1= [];
gdjs.New_32sceneCode.GDB_95to_95menuObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0x5b71c8 = function(runtimeScene) {

{


{
gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects1.createFrom(runtimeScene.getObjects("Num_deaths_eval"));
gdjs.New_32sceneCode.GDScore_95evalObjects1.createFrom(runtimeScene.getObjects("Score_eval"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDScore_95evalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDScore_95evalObjects1[i].setString("Your score was: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects1[i].setString("And you´ve died " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + " times");
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_menu", false);
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x5b71c8


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDBoxObjects1.length = 0;
gdjs.New_32sceneCode.GDBoxObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDCrab_95collectibleObjects1.length = 0;
gdjs.New_32sceneCode.GDCrab_95collectibleObjects2.length = 0;
gdjs.New_32sceneCode.GDScore_95counterObjects1.length = 0;
gdjs.New_32sceneCode.GDScore_95counterObjects2.length = 0;
gdjs.New_32sceneCode.GDWall_95textureObjects1.length = 0;
gdjs.New_32sceneCode.GDWall_95textureObjects2.length = 0;
gdjs.New_32sceneCode.GDWhirly_95gigsawObjects1.length = 0;
gdjs.New_32sceneCode.GDWhirly_95gigsawObjects2.length = 0;
gdjs.New_32sceneCode.GDEnemy_95crabObjects1.length = 0;
gdjs.New_32sceneCode.GDEnemy_95crabObjects2.length = 0;
gdjs.New_32sceneCode.GDEnemy_95leftObjects1.length = 0;
gdjs.New_32sceneCode.GDEnemy_95leftObjects2.length = 0;
gdjs.New_32sceneCode.GDEnemy_95rightObjects1.length = 0;
gdjs.New_32sceneCode.GDEnemy_95rightObjects2.length = 0;
gdjs.New_32sceneCode.GDSpikesObjects1.length = 0;
gdjs.New_32sceneCode.GDSpikesObjects2.length = 0;
gdjs.New_32sceneCode.GDCeiling_95spikesObjects1.length = 0;
gdjs.New_32sceneCode.GDCeiling_95spikesObjects2.length = 0;
gdjs.New_32sceneCode.GDWallspikes_95rightObjects1.length = 0;
gdjs.New_32sceneCode.GDWallspikes_95rightObjects2.length = 0;
gdjs.New_32sceneCode.GDTextObjects1.length = 0;
gdjs.New_32sceneCode.GDTextObjects2.length = 0;
gdjs.New_32sceneCode.GDScore_95evalObjects1.length = 0;
gdjs.New_32sceneCode.GDScore_95evalObjects2.length = 0;
gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects1.length = 0;
gdjs.New_32sceneCode.GDNum_95deaths_95evalObjects2.length = 0;
gdjs.New_32sceneCode.GDCGObjects1.length = 0;
gdjs.New_32sceneCode.GDCGObjects2.length = 0;
gdjs.New_32sceneCode.GDB_95to_95menuObjects1.length = 0;
gdjs.New_32sceneCode.GDB_95to_95menuObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
