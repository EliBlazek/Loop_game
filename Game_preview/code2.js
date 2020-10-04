gdjs.Level12Code = {};
gdjs.Level12Code.GDBoxObjects1= [];
gdjs.Level12Code.GDBoxObjects2= [];
gdjs.Level12Code.GDPlayerObjects1= [];
gdjs.Level12Code.GDPlayerObjects2= [];
gdjs.Level12Code.GDCrab_95collectibleObjects1= [];
gdjs.Level12Code.GDCrab_95collectibleObjects2= [];
gdjs.Level12Code.GDScore_95counterObjects1= [];
gdjs.Level12Code.GDScore_95counterObjects2= [];
gdjs.Level12Code.GDWall_95textureObjects1= [];
gdjs.Level12Code.GDWall_95textureObjects2= [];
gdjs.Level12Code.GDWhirly_95gigsawObjects1= [];
gdjs.Level12Code.GDWhirly_95gigsawObjects2= [];
gdjs.Level12Code.GDEnemy_95crabObjects1= [];
gdjs.Level12Code.GDEnemy_95crabObjects2= [];
gdjs.Level12Code.GDcolision_95detectionObjects1= [];
gdjs.Level12Code.GDcolision_95detectionObjects2= [];
gdjs.Level12Code.GDInvis_95spawn_95flagObjects1= [];
gdjs.Level12Code.GDInvis_95spawn_95flagObjects2= [];
gdjs.Level12Code.GDExit_95doorObjects1= [];
gdjs.Level12Code.GDExit_95doorObjects2= [];
gdjs.Level12Code.GDConsoleObjects1= [];
gdjs.Level12Code.GDConsoleObjects2= [];
gdjs.Level12Code.GDConsole_95sparksObjects1= [];
gdjs.Level12Code.GDConsole_95sparksObjects2= [];
gdjs.Level12Code.GDTrans_95vitrazObjects1= [];
gdjs.Level12Code.GDTrans_95vitrazObjects2= [];
gdjs.Level12Code.GDTorchObjects1= [];
gdjs.Level12Code.GDTorchObjects2= [];
gdjs.Level12Code.GDSpikesObjects1= [];
gdjs.Level12Code.GDSpikesObjects2= [];
gdjs.Level12Code.GDFlameObjects1= [];
gdjs.Level12Code.GDFlameObjects2= [];
gdjs.Level12Code.GDCeiling_95spikesObjects1= [];
gdjs.Level12Code.GDCeiling_95spikesObjects2= [];
gdjs.Level12Code.GDWallspikes_95rightObjects1= [];
gdjs.Level12Code.GDWallspikes_95rightObjects2= [];

gdjs.Level12Code.conditionTrue_0 = {val:false};
gdjs.Level12Code.condition0IsTrue_0 = {val:false};
gdjs.Level12Code.condition1IsTrue_0 = {val:false};
gdjs.Level12Code.condition2IsTrue_0 = {val:false};
gdjs.Level12Code.condition3IsTrue_0 = {val:false};
gdjs.Level12Code.conditionTrue_1 = {val:false};
gdjs.Level12Code.condition0IsTrue_1 = {val:false};
gdjs.Level12Code.condition1IsTrue_1 = {val:false};
gdjs.Level12Code.condition2IsTrue_1 = {val:false};
gdjs.Level12Code.condition3IsTrue_1 = {val:false};


gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level12Code.GDPlayerObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDCrab_9595collectibleObjects1Objects = Hashtable.newFrom({"Crab_collectible": gdjs.Level12Code.GDCrab_95collectibleObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level12Code.GDPlayerObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDcolision_9595detectionObjects1Objects = Hashtable.newFrom({"colision_detection": gdjs.Level12Code.GDcolision_95detectionObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level12Code.GDPlayerObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDCeiling_9595spikesObjects1Objects = Hashtable.newFrom({"Ceiling_spikes": gdjs.Level12Code.GDCeiling_95spikesObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level12Code.GDPlayerObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Level12Code.GDSpikesObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level12Code.GDPlayerObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDWallspikes_9595rightObjects1Objects = Hashtable.newFrom({"Wallspikes_right": gdjs.Level12Code.GDWallspikes_95rightObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level12Code.GDPlayerObjects1});gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDExit_9595doorObjects1Objects = Hashtable.newFrom({"Exit_door": gdjs.Level12Code.GDExit_95doorObjects1});gdjs.Level12Code.eventsList0x5b71c8 = function(runtimeScene) {

{



}


{


{
}

}


{


gdjs.Level12Code.condition0IsTrue_0.val = false;
{
{gdjs.Level12Code.conditionTrue_1 = gdjs.Level12Code.condition0IsTrue_0;
gdjs.Level12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7169500);
}
}if (gdjs.Level12Code.condition0IsTrue_0.val) {
gdjs.Level12Code.GDInvis_95spawn_95flagObjects1.createFrom(runtimeScene.getObjects("Invis_spawn_flag"));
gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level12Code.GDcolision_95detectionObjects1.createFrom(runtimeScene.getObjects("colision_detection"));
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/loop.ogg", true, 100, 1);
}{for(var i = 0, len = gdjs.Level12Code.GDcolision_95detectionObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDcolision_95detectionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level12Code.GDInvis_95spawn_95flagObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDInvis_95spawn_95flagObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


{
gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level12Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level12Code.GDPlayerObjects1[0].getPointX("")) + 80, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level12Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level12Code.GDPlayerObjects1[0].getPointY("")) - 45, "", 0);
}}

}


{



}


{

gdjs.Level12Code.GDCrab_95collectibleObjects1.createFrom(runtimeScene.getObjects("Crab_collectible"));
gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects, gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDCrab_9595collectibleObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level12Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDCrab_95collectibleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.Level12Code.GDCrab_95collectibleObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDCrab_95collectibleObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/chomp.ogg", false, 100, 1);
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level12Code.GDcolision_95detectionObjects1.createFrom(runtimeScene.getObjects("colision_detection"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects, gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDcolision_9595detectionObjects1Objects, false, runtimeScene, true);
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
{gdjs.Level12Code.conditionTrue_1 = gdjs.Level12Code.condition1IsTrue_0;
gdjs.Level12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7035748);
}
}}
if (gdjs.Level12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/blood.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
gdjs.Level12Code.condition2IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level12Code.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.Level12Code.condition1IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if ( gdjs.Level12Code.condition1IsTrue_0.val ) {
{
{gdjs.Level12Code.conditionTrue_1 = gdjs.Level12Code.condition2IsTrue_0;
gdjs.Level12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7036964);
}
}}
}
if (gdjs.Level12Code.condition2IsTrue_0.val) {
gdjs.Level12Code.GDInvis_95spawn_95flagObjects1.createFrom(runtimeScene.getObjects("Invis_spawn_flag"));
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setPosition((( gdjs.Level12Code.GDInvis_95spawn_95flagObjects1.length === 0 ) ? 0 :gdjs.Level12Code.GDInvis_95spawn_95flagObjects1[0].getPointX("")),(( gdjs.Level12Code.GDInvis_95spawn_95flagObjects1.length === 0 ) ? 0 :gdjs.Level12Code.GDInvis_95spawn_95flagObjects1[0].getPointY("")));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.Level12Code.GDCeiling_95spikesObjects1.createFrom(runtimeScene.getObjects("Ceiling_spikes"));
gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects, gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDCeiling_9595spikesObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
{gdjs.Level12Code.conditionTrue_1 = gdjs.Level12Code.condition1IsTrue_0;
gdjs.Level12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7038116);
}
}}
if (gdjs.Level12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/blood.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level12Code.GDSpikesObjects1.createFrom(runtimeScene.getObjects("Spikes"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects, gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDSpikesObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
{gdjs.Level12Code.conditionTrue_1 = gdjs.Level12Code.condition1IsTrue_0;
gdjs.Level12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7447388);
}
}}
if (gdjs.Level12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/blood.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level12Code.GDWallspikes_95rightObjects1.createFrom(runtimeScene.getObjects("Wallspikes_right"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects, gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDWallspikes_9595rightObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
{gdjs.Level12Code.conditionTrue_1 = gdjs.Level12Code.condition1IsTrue_0;
gdjs.Level12Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7448564);
}
}}
if (gdjs.Level12Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/blood.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


{
}

}


{



}


{


{
gdjs.Level12Code.GDScore_95counterObjects1.createFrom(runtimeScene.getObjects("Score_counter"));
{for(var i = 0, len = gdjs.Level12Code.GDScore_95counterObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDScore_95counterObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{



}


{

gdjs.Level12Code.GDExit_95doorObjects1.createFrom(runtimeScene.getObjects("Exit_door"));
gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDPlayerObjects1Objects, gdjs.Level12Code.mapOfGDgdjs_46Level12Code_46GDExit_9595doorObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level12Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level13", false);
}}

}


{



}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level12Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level12Code.condition0IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
gdjs.Level12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.Level12Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound/jump.ogg", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level12Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Level12Code.condition0IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if (gdjs.Level12Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
gdjs.Level12Code.condition2IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level12Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level12Code.condition1IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if ( gdjs.Level12Code.condition1IsTrue_0.val ) {
{
gdjs.Level12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level12Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(0);
}
}{runtimeScene.getGame().getVariables().get("Direction").setString("right");
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
gdjs.Level12Code.condition2IsTrue_0.val = false;
{
gdjs.Level12Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level12Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level12Code.condition1IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if ( gdjs.Level12Code.condition1IsTrue_0.val ) {
{
gdjs.Level12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level12Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().get("Direction").setString("left");
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
gdjs.Level12Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level12Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level12Code.condition0IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
gdjs.Level12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Direction")) == "right";
}if ( gdjs.Level12Code.condition1IsTrue_0.val ) {
{
gdjs.Level12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level12Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.Level12Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level12Code.condition0IsTrue_0.val = false;
gdjs.Level12Code.condition1IsTrue_0.val = false;
gdjs.Level12Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level12Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level12Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level12Code.condition0IsTrue_0.val = true;
        gdjs.Level12Code.GDPlayerObjects1[k] = gdjs.Level12Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level12Code.GDPlayerObjects1.length = k;}if ( gdjs.Level12Code.condition0IsTrue_0.val ) {
{
gdjs.Level12Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Direction")) == "left";
}if ( gdjs.Level12Code.condition1IsTrue_0.val ) {
{
gdjs.Level12Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Level12Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level12Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level12Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level12Code.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


{
}

}


}; //End of gdjs.Level12Code.eventsList0x5b71c8


gdjs.Level12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level12Code.GDBoxObjects1.length = 0;
gdjs.Level12Code.GDBoxObjects2.length = 0;
gdjs.Level12Code.GDPlayerObjects1.length = 0;
gdjs.Level12Code.GDPlayerObjects2.length = 0;
gdjs.Level12Code.GDCrab_95collectibleObjects1.length = 0;
gdjs.Level12Code.GDCrab_95collectibleObjects2.length = 0;
gdjs.Level12Code.GDScore_95counterObjects1.length = 0;
gdjs.Level12Code.GDScore_95counterObjects2.length = 0;
gdjs.Level12Code.GDWall_95textureObjects1.length = 0;
gdjs.Level12Code.GDWall_95textureObjects2.length = 0;
gdjs.Level12Code.GDWhirly_95gigsawObjects1.length = 0;
gdjs.Level12Code.GDWhirly_95gigsawObjects2.length = 0;
gdjs.Level12Code.GDEnemy_95crabObjects1.length = 0;
gdjs.Level12Code.GDEnemy_95crabObjects2.length = 0;
gdjs.Level12Code.GDcolision_95detectionObjects1.length = 0;
gdjs.Level12Code.GDcolision_95detectionObjects2.length = 0;
gdjs.Level12Code.GDInvis_95spawn_95flagObjects1.length = 0;
gdjs.Level12Code.GDInvis_95spawn_95flagObjects2.length = 0;
gdjs.Level12Code.GDExit_95doorObjects1.length = 0;
gdjs.Level12Code.GDExit_95doorObjects2.length = 0;
gdjs.Level12Code.GDConsoleObjects1.length = 0;
gdjs.Level12Code.GDConsoleObjects2.length = 0;
gdjs.Level12Code.GDConsole_95sparksObjects1.length = 0;
gdjs.Level12Code.GDConsole_95sparksObjects2.length = 0;
gdjs.Level12Code.GDTrans_95vitrazObjects1.length = 0;
gdjs.Level12Code.GDTrans_95vitrazObjects2.length = 0;
gdjs.Level12Code.GDTorchObjects1.length = 0;
gdjs.Level12Code.GDTorchObjects2.length = 0;
gdjs.Level12Code.GDSpikesObjects1.length = 0;
gdjs.Level12Code.GDSpikesObjects2.length = 0;
gdjs.Level12Code.GDFlameObjects1.length = 0;
gdjs.Level12Code.GDFlameObjects2.length = 0;
gdjs.Level12Code.GDCeiling_95spikesObjects1.length = 0;
gdjs.Level12Code.GDCeiling_95spikesObjects2.length = 0;
gdjs.Level12Code.GDWallspikes_95rightObjects1.length = 0;
gdjs.Level12Code.GDWallspikes_95rightObjects2.length = 0;

gdjs.Level12Code.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['Level12Code'] = gdjs.Level12Code;
