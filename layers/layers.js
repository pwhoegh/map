var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_virtual_layer_1 = new ol.format.GeoJSON();
var features_virtual_layer_1 = format_virtual_layer_1.readFeatures(json_virtual_layer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virtual_layer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virtual_layer_1.addFeatures(features_virtual_layer_1);
var lyr_virtual_layer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_virtual_layer_1, 
                style: style_virtual_layer_1,
                interactive: true,
                title: '<img src="styles/legend/virtual_layer_1.png" /> virtual_layer'
            });
var format_virtual_layer2_2 = new ol.format.GeoJSON();
var features_virtual_layer2_2 = format_virtual_layer2_2.readFeatures(json_virtual_layer2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virtual_layer2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virtual_layer2_2.addFeatures(features_virtual_layer2_2);
var lyr_virtual_layer2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_virtual_layer2_2, 
                style: style_virtual_layer2_2,
                interactive: true,
                title: '<img src="styles/legend/virtual_layer2_2.png" /> virtual_layer2'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_virtual_layer_1.setVisible(true);lyr_virtual_layer2_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_virtual_layer_1,lyr_virtual_layer2_2];
lyr_virtual_layer_1.set('fieldAliases', {'SITE': 'Name', 'ADDRESS': 'Address', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP CODE': 'Zip Code', 'CONTACT': 'Contact', 'PHONE': 'PHONE', 'EMAIL': 'EMAIL', 'RESOURCES': 'Resources', 'AVAILABILI': 'Availability', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_virtual_layer2_2.set('fieldAliases', {'SITE': 'Name', 'ADDRESS': 'Address', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP CODE': 'Zip Code', 'CONTACT': 'Contact', 'PHONE': 'PHONE', 'EMAIL': 'EMAIL', 'RESOURCES': 'Resources', 'AVAILABILI': 'Availability', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_virtual_layer_1.set('fieldImages', {'SITE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'Hidden', 'STATE': 'Hidden', 'ZIP CODE': 'TextEdit', 'CONTACT': 'TextEdit', 'PHONE': 'TextEdit', 'EMAIL': 'TextEdit', 'RESOURCES': 'TextEdit', 'AVAILABILI': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_virtual_layer2_2.set('fieldImages', {'SITE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'Hidden', 'STATE': 'Hidden', 'ZIP CODE': 'TextEdit', 'CONTACT': 'TextEdit', 'PHONE': 'TextEdit', 'EMAIL': 'TextEdit', 'RESOURCES': 'TextEdit', 'AVAILABILI': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_virtual_layer_1.set('fieldLabels', {'SITE': 'header label', 'ADDRESS': 'header label', 'ZIP CODE': 'header label', 'CONTACT': 'header label', 'PHONE': 'no label', 'EMAIL': 'no label', 'RESOURCES': 'header label', 'AVAILABILI': 'header label', });
lyr_virtual_layer2_2.set('fieldLabels', {'SITE': 'header label', 'ADDRESS': 'header label', 'ZIP CODE': 'header label', 'CONTACT': 'header label', 'PHONE': 'no label', 'EMAIL': 'no label', 'RESOURCES': 'header label', 'AVAILABILI': 'header label', });
lyr_virtual_layer2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});