var MarkerRotation = pc.createScript('markerRotation');
MarkerRotation.attributes.add('camera', {
    type: 'entity', 
    title: 'camera', 
    description: 'camera entity for getting rotation data'
});

MarkerRotation.prototype.update = function(dt) {
    this.entity.setEulerAngles(this.camera.getEulerAngles().x, this.camera.getEulerAngles().y, this.camera.getEulerAngles().z);
};
