var Marker = pc.createScript('marker');
Marker.attributes.add('markerOrigin', {
    type: 'entity', 
    title: 'marker', 
    description: 'element entity'
});

Marker.prototype.initialize = function() {
    this.CreateMarker();
};

// create marker number and set position
Marker.prototype.CreateMarker = function() {

    this.marker = [];
    let markerNum = Math.ceil(Math.random() * 30);
    let markerPositionX, markerPositionZ;

    for (var i = 0; i < markerNum; i++) {

        // make clones of markerOrigin and assign to root node
        this.marker[i] = this.markerOrigin.clone();
        this.app.root.addChild(this.marker[i]);

        // create random position data
        markerPositionX = Math.round(((Math.random() * 8) - 4) * 1000) / 1000;
        markerPositionZ = Math.round(((Math.random() * 8) - 4) * 1000) / 1000;

        // assign position data and enable
        this.marker[i].setPosition(markerPositionX, 0.1, markerPositionZ);
        this.marker[i].enabled = true;
    }

};
