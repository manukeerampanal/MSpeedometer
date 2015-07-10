function incrementalUpdate(mspeedometer) {
    var target = mspeedometer.value() < mspeedometer.max() ?
        mspeedometer.max() : mspeedometer.min ();
    mspeedometer.animatedUpdate(target, 1000);
}
function randomUpdate(mspeedometer) {
    var target = Math.random() * mspeedometer.max();
    var time = Math.random() * 5000;
    mspeedometer.animatedUpdate(target, time);
}
function stopAnimation(mspeedometer) {
    mspeedometer.stopAnimation();
}
