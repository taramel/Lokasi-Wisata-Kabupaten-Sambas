var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kab_Sambas_1 = new ol.format.GeoJSON();
var features_Kab_Sambas_1 = format_Kab_Sambas_1.readFeatures(json_Kab_Sambas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kab_Sambas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kab_Sambas_1.addFeatures(features_Kab_Sambas_1);
var lyr_Kab_Sambas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kab_Sambas_1, 
                style: style_Kab_Sambas_1,
                popuplayertitle: 'Kab_Sambas',
                interactive: true,
                title: '<img src="styles/legend/Kab_Sambas_1.png" /> Kab_Sambas'
            });
var format_LokasiWisataKabSambas_2 = new ol.format.GeoJSON();
var features_LokasiWisataKabSambas_2 = format_LokasiWisataKabSambas_2.readFeatures(json_LokasiWisataKabSambas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiWisataKabSambas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiWisataKabSambas_2.addFeatures(features_LokasiWisataKabSambas_2);
cluster_LokasiWisataKabSambas_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LokasiWisataKabSambas_2
});
var lyr_LokasiWisataKabSambas_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LokasiWisataKabSambas_2, 
                style: style_LokasiWisataKabSambas_2,
                popuplayertitle: 'Lokasi Wisata Kab Sambas',
                interactive: true,
                title: '<img src="styles/legend/LokasiWisataKabSambas_2.png" /> Lokasi Wisata Kab Sambas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kab_Sambas_1.setVisible(true);lyr_LokasiWisataKabSambas_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kab_Sambas_1,lyr_LokasiWisataKabSambas_2];
lyr_Kab_Sambas_1.set('fieldAliases', {'FID': 'FID', 'NAME': 'NAME', 'KODE_KEC': 'KODE_KEC', 'KODE_KD': 'KODE_KD', 'KODE_KK': 'KODE_KK', 'KODE_PROV': 'KODE_PROV', 'TIPE_KD': 'TIPE_KD', 'KECAMATAN': 'KECAMATAN', 'KEL_DESA': 'KEL_DESA', 'KAB_KOTA': 'KAB_KOTA', 'PROVINSI': 'PROVINSI', 'JENIS_KD': 'JENIS_KD', 'D_STUNTING': 'D_STUNTING', 'KETERANGAN': 'KETERANGAN', });
lyr_LokasiWisataKabSambas_2.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'X': 'X', 'Y': 'Y', });
lyr_Kab_Sambas_1.set('fieldImages', {'FID': 'TextEdit', 'NAME': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KD': 'TextEdit', 'KODE_KK': 'TextEdit', 'KODE_PROV': 'TextEdit', 'TIPE_KD': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KEL_DESA': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'JENIS_KD': 'TextEdit', 'D_STUNTING': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_LokasiWisataKabSambas_2.set('fieldImages', {'No': 'Hidden', 'Nama': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Kab_Sambas_1.set('fieldLabels', {'FID': 'no label', 'NAME': 'inline label - visible with data', 'KODE_KEC': 'no label', 'KODE_KD': 'no label', 'KODE_KK': 'no label', 'KODE_PROV': 'no label', 'TIPE_KD': 'no label', 'KECAMATAN': 'no label', 'KEL_DESA': 'no label', 'KAB_KOTA': 'no label', 'PROVINSI': 'no label', 'JENIS_KD': 'no label', 'D_STUNTING': 'no label', 'KETERANGAN': 'no label', });
lyr_LokasiWisataKabSambas_2.set('fieldLabels', {'Nama': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_LokasiWisataKabSambas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});