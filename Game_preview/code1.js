gdjs.Level1Code = {};
gdjs.Level1Code.GDBoxObjects1= [];
gdjs.Level1Code.GDBoxObjects2= [];
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDCrab_95collectibleObjects1= [];
gdjs.Level1Code.GDCrab_95collectibleObjects2= [];
gdjs.Level1Code.GDScore_95counterObjects1= [];
gdjs.Level1Code.GDScore_95counterObjects2= [];
gdjs.Level1Code.GDWall_95textureObjects1= [];
gdjs.Level1Code.GDWall_95textureObjects2= [];
gdjs.Level1Code.GDWhirly_95gigsawObjects1= [];
gdjs.Level1Code.GDWhirly_95gigsawObjects2= [];
gdjs.Level1Code.GDEnemy_95crabObjects1= [];
gdjs.Level1Code.GDEnemy_95crabObjects2= [];
gdjs.Level1Code.GDcolision_95detectionObjects1= [];
gdjs.Level1Code.GDcolision_95detectionObjects2= [];
gdjs.Level1Code.GDInvis_95spawn_95flagObjects1= [];
gdjs.Level1Code.GDInvis_95spawn_95flagObjects2= [];
gdjs.Level1Code.GDExit_95doorObjects1= [];
gdjs.Level1Code.GDExit_95doorObjects2= [];
gdjs.Level1Code.GDConsoleObjects1= [];
gdjs.Level1Code.GDConsoleObjects2= [];
gdjs.Level1Code.GDConsole_95sparksObjects1= [];
gdjs.Level1Code.GDConsole_95sparksObjects2= [];
gdjs.Level1Code.GDTrans_95vitrazObjects1= [];
gdjs.Level1Code.GDTrans_95vitrazObjects2= [];
gdjs.Level1Code.GDTorchObjects1= [];
gdjs.Level1Code.GDTorchObjects2= [];
gdjs.Level1Code.GDFlameObjects1= [];
gdjs.Level1Code.GDFlameObjects2= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCrab_9595collectibleObjects1Objects = Hashtable.newFrom({"Crab_collectible": gdjs.Level1Code.GDCrab_95collectibleObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcolision_9595detectionObjects1Objects = Hashtable.newFrom({"colision_detection": gdjs.Level1Code.GDcolision_95detectionObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExit_9595doorObjects1Objects = Hashtable.newFrom({"Exit_door": gdjs.Level1Code.GDExit_95doorObjects1});gdjs.Level1Code.eventsList0x5b71c8 = function(runtimeScene) {

{



}


{


{
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7170308);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDInvis_95spawn_95flagObjects1.createFrom(runtimeScene.getObjects("Invis_spawn_flag"));
gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level1Code.GDcolision_95detectionObjects1.createFrom(runtimeScene.getObjects("colision_detection"));
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/loop.ogg", true, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDcolision_95detectionObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDcolision_95detectionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDInvis_95spawn_95flagObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDInvis_95spawn_95flagObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


{
gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")) + 80, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")) - 45, "", 0);
}}

}


{



}


{

gdjs.Level1Code.GDCrab_95collectibleObjects1.createFrom(runtimeScene.getObjects("Crab_collectible"));
gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCrab_9595collectibleObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCrab_95collectibleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.Level1Code.GDCrab_95collectibleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCrab_95collectibleObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/chomp.ogg", false, 100, 1);
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level1Code.GDcolision_95detectionObjects1.createFrom(runtimeScene.getObjects("colision_detection"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDcolision_9595detectionObjects1Objects, false, runtimeScene, true);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7661796);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/blood.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition2IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7719924);
}
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
gdjs.Level1Code.GDInvis_95spawn_95flagObjects1.createFrom(runtimeScene.getObjects("Invis_spawn_flag"));
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setPosition((( gdjs.Level1Code.GDInvis_95spawn_95flagObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDInvis_95spawn_95flagObjects1[0].getPointX("")),(( gdjs.Level1Code.GDInvis_95spawn_95flagObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDInvis_95spawn_95flagObjects1[0].getPointY("")));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{



}


{


{
gdjs.Level1Code.GDScore_95counterObjects1.createFrom(runtimeScene.getObjects("Score_counter"));
{for(var i = 0, len = gdjs.Level1Code.GDScore_95counterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDScore_95counterObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{



}


{

gdjs.Level1Code.GDExit_95doorObjects1.createFrom(runtimeScene.getObjects("Exit_door"));
gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExit_9595doorObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level12", false);
}}

}


{



}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/jump.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(0);
}
}{runtimeScene.getGame().getVariables().get("Direction").setString("right");
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().get("Direction").setString("left");
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Direction")) == "right";
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.Level1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Direction")) == "left";
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


{
}

}


}; //End of gdjs.Level1Code.eventsList0x5b71c8


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDBoxObjects1.length = 0;
gdjs.Level1Code.GDBoxObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDCrab_95collectibleObjects1.length = 0;
gdjs.Level1Code.GDCrab_95collectibleObjects2.length = 0;
gdjs.Level1Code.GDScore_95counterObjects1.length = 0;
gdjs.Level1Code.GDScore_95counterObjects2.length = 0;
gdjs.Level1Code.GDWall_95textureObjects1.length = 0;
gdjs.Level1Code.GDWall_95textureObjects2.length = 0;
gdjs.Level1Code.GDWhirly_95gigsawObjects1.length = 0;
gdjs.Level1Code.GDWhirly_95gigsawObjects2.length = 0;
gdjs.Level1Code.GDEnemy_95crabObjects1.length = 0;
gdjs.Level1Code.GDEnemy_95crabObjects2.length = 0;
gdjs.Level1Code.GDcolision_95detectionObjects1.length = 0;
gdjs.Level1Code.GDcolision_95detectionObjects2.length = 0;
gdjs.Level1Code.GDInvis_95spawn_95flagObjects1.length = 0;
gdjs.Level1Code.GDInvis_95spawn_95flagObjects2.length = 0;
gdjs.Level1Code.GDExit_95doorObjects1.length = 0;
gdjs.Level1Code.GDExit_95doorObjects2.length = 0;
gdjs.Level1Code.GDConsoleObjects1.length = 0;
gdjs.Level1Code.GDConsoleObjects2.length = 0;
gdjs.Level1Code.GDConsole_95sparksObjects1.length = 0;
gdjs.Level1Code.GDConsole_95sparksObjects2.length = 0;
gdjs.Level1Code.GDTrans_95vitrazObjects1.length = 0;
gdjs.Level1Code.GDTrans_95vitrazObjects2.length = 0;
gdjs.Level1Code.GDTorchObjects1.length = 0;
gdjs.Level1Code.GDTorchObjects2.length = 0;
gdjs.Level1Code.GDFlameObjects1.length = 0;
gdjs.Level1Code.GDFlameObjects2.length = 0;

gdjs.Level1Code.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
