ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:26332").setExtent([122030.802401, 891036.206306, 540706.804833, 1090684.719845]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SatelliteOnly_2 = new ol.layer.Tile({
            'title': 'Satellite Only',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_FCTControls_3 = new ol.format.GeoJSON();
var features_FCTControls_3 = format_FCTControls_3.readFeatures(json_FCTControls_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26332'});
var jsonSource_FCTControls_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FCTControls_3.addFeatures(features_FCTControls_3);
var lyr_FCTControls_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FCTControls_3, 
                style: style_FCTControls_3,
                interactive: true,
    title: 'FCT Controls<br />\
    <img src="styles/legend/FCTControls_3_0.png" /> Not Specified<br />\
    <img src="styles/legend/FCTControls_3_1.png" /> Primary Controls<br />\
    <img src="styles/legend/FCTControls_3_2.png" /> Secondary Controls<br />\
    <img src="styles/legend/FCTControls_3_3.png" /> Tertiary Controls<br />\
    <img src="styles/legend/FCTControls_3_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_SatelliteOnly_2.setVisible(true);lyr_FCTControls_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OpenTopoMap_1,lyr_SatelliteOnly_2,lyr_FCTControls_3];
lyr_FCTControls_3.set('fieldAliases', {'fid': 'fid', 'POINT NO': 'Control Name', 'NORTHINGS': 'NORTHINGS', 'EASTINGS': 'EASTINGS', 'HEIGHT': 'HEIGHT', 'REMARKS': 'REMARKS', 'Not Specified': 'Control Category', });
lyr_FCTControls_3.set('fieldImages', {'fid': 'TextEdit', 'POINT NO': 'TextEdit', 'NORTHINGS': 'TextEdit', 'EASTINGS': 'TextEdit', 'HEIGHT': 'TextEdit', 'REMARKS': 'TextEdit', 'Not Specified': 'TextEdit', });
lyr_FCTControls_3.set('fieldLabels', {'fid': 'inline label', 'POINT NO': 'inline label', 'NORTHINGS': 'inline label', 'EASTINGS': 'inline label', 'HEIGHT': 'inline label', 'REMARKS': 'inline label', 'Not Specified': 'inline label', });
lyr_FCTControls_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});