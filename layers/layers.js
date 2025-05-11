var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KerentananBencanaBanjir_1 = new ol.format.GeoJSON();
var features_KerentananBencanaBanjir_1 = format_KerentananBencanaBanjir_1.readFeatures(json_KerentananBencanaBanjir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananBencanaBanjir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananBencanaBanjir_1.addFeatures(features_KerentananBencanaBanjir_1);
var lyr_KerentananBencanaBanjir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananBencanaBanjir_1, 
                style: style_KerentananBencanaBanjir_1,
                popuplayertitle: 'Kerentanan Bencana Banjir',
                interactive: true,
    title: 'Kerentanan Bencana Banjir<br />\
    <img src="styles/legend/KerentananBencanaBanjir_1_0.png" /> Rendah<br />\
    <img src="styles/legend/KerentananBencanaBanjir_1_1.png" /> Sedang<br />\
    <img src="styles/legend/KerentananBencanaBanjir_1_2.png" /> Tinggi<br />' });
var format_KerentananEkonomi_2 = new ol.format.GeoJSON();
var features_KerentananEkonomi_2 = format_KerentananEkonomi_2.readFeatures(json_KerentananEkonomi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananEkonomi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananEkonomi_2.addFeatures(features_KerentananEkonomi_2);
var lyr_KerentananEkonomi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananEkonomi_2, 
                style: style_KerentananEkonomi_2,
                popuplayertitle: 'Kerentanan Ekonomi',
                interactive: true,
    title: 'Kerentanan Ekonomi<br />\
    <img src="styles/legend/KerentananEkonomi_2_0.png" /> Kebun<br />\
    <img src="styles/legend/KerentananEkonomi_2_1.png" /> Sawah<br />' });
var format_KerentananFisik_3 = new ol.format.GeoJSON();
var features_KerentananFisik_3 = format_KerentananFisik_3.readFeatures(json_KerentananFisik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananFisik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananFisik_3.addFeatures(features_KerentananFisik_3);
var lyr_KerentananFisik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananFisik_3, 
                style: style_KerentananFisik_3,
                popuplayertitle: 'Kerentanan Fisik',
                interactive: true,
    title: 'Kerentanan Fisik<br />\
    <img src="styles/legend/KerentananFisik_3_0.png" /> FASILITAS KRITIS<br />\
    <img src="styles/legend/KerentananFisik_3_1.png" /> FASILITAS UMUM<br />\
    <img src="styles/legend/KerentananFisik_3_2.png" /> RUMAH<br />' });
var format_KerentananLingkungan_4 = new ol.format.GeoJSON();
var features_KerentananLingkungan_4 = format_KerentananLingkungan_4.readFeatures(json_KerentananLingkungan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananLingkungan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananLingkungan_4.addFeatures(features_KerentananLingkungan_4);
var lyr_KerentananLingkungan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananLingkungan_4, 
                style: style_KerentananLingkungan_4,
                popuplayertitle: 'Kerentanan Lingkungan',
                interactive: true,
    title: 'Kerentanan Lingkungan<br />\
    <img src="styles/legend/KerentananLingkungan_4_0.png" /> Hutan Alam<br />\
    <img src="styles/legend/KerentananLingkungan_4_1.png" /> Hutan Bakau/Mangrove<br />\
    <img src="styles/legend/KerentananLingkungan_4_2.png" /> Semak Belukar<br />' });
var format_KerentananSosial_5 = new ol.format.GeoJSON();
var features_KerentananSosial_5 = format_KerentananSosial_5.readFeatures(json_KerentananSosial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananSosial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananSosial_5.addFeatures(features_KerentananSosial_5);
var lyr_KerentananSosial_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananSosial_5, 
                style: style_KerentananSosial_5,
                popuplayertitle: 'Kerentanan Sosial',
                interactive: true,
    title: 'Kerentanan Sosial<br />\
    <img src="styles/legend/KerentananSosial_5_0.png" /> Rendah<br />\
    <img src="styles/legend/KerentananSosial_5_1.png" /> Sedang<br />\
    <img src="styles/legend/KerentananSosial_5_2.png" /> Tinggi<br />' });
var format_BatasDusun_6 = new ol.format.GeoJSON();
var features_BatasDusun_6 = format_BatasDusun_6.readFeatures(json_BatasDusun_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_6.addFeatures(features_BatasDusun_6);
var lyr_BatasDusun_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_6, 
                style: style_BatasDusun_6,
                popuplayertitle: 'Batas Dusun',
                interactive: false,
                title: '<img src="styles/legend/BatasDusun_6.png" /> Batas Dusun'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_KerentananBencanaBanjir_1.setVisible(true);lyr_KerentananEkonomi_2.setVisible(true);lyr_KerentananFisik_3.setVisible(true);lyr_KerentananLingkungan_4.setVisible(true);lyr_KerentananSosial_5.setVisible(true);lyr_BatasDusun_6.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_KerentananBencanaBanjir_1,lyr_KerentananEkonomi_2,lyr_KerentananFisik_3,lyr_KerentananLingkungan_4,lyr_KerentananSosial_5,lyr_BatasDusun_6];
lyr_KerentananBencanaBanjir_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Dusun': 'Dusun', 'Luas_1': 'Luas_1', 'Indeks_Ren': 'Indeks_Ren', 'IKL': 'IKL', 'IKF': 'IKF', 'IKE': 'IKE', 'INDEKS_TOT': 'INDEKS_TOT', });
lyr_KerentananEkonomi_2.set('fieldAliases', {'Id': 'Id', 'NAMOBJ': 'NAMOBJ', 'Luas': 'Luas', 'Klasifikas': 'Klasifikas', 'Penghasian': 'Penghasian', 'Dusun': 'Dusun', 'p_dusun': 'p_dusun', 'skor': 'skor', });
lyr_KerentananFisik_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KerentananLingkungan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Lingkungan': 'Lingkungan', 'luas_ha': 'luas_ha', 'Shape_Area': 'Shape_Area', 'IKL': 'IKL', });
lyr_KerentananSosial_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Luas_1': 'Luas_1', 'J_Penduduk': 'J_Penduduk', 'JP_LK': 'JP_LK', 'JP_PR': 'JP_PR', 'Disabilita': 'Disabilita', 'Rasio_Jeni': 'Rasio_Jeni', 'Rasio_Kepa': 'Rasio_Kepa', 'Rasio_PM': 'Rasio_PM', 'Rasio_Umur': 'Rasio_Umur', 'Rasio_Disa': 'Rasio_Disa', 'IKS': 'IKS', });
lyr_BatasDusun_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Dusun': 'Dusun', 'Batas_RW': 'Batas_RW', 'Luas_1': 'Luas_1', 'J_Penduduk': 'J_Penduduk', 'JP_LK': 'JP_LK', 'JP_PR': 'JP_PR', 'U_15_11': 'U_15_11', 'U_12_60': 'U_12_60', 'U___60': 'U___60', 'Disabilita': 'Disabilita', 'p_p__600': 'p_p__600', 'J_Pengangg': 'J_Pengangg', 'Rasio_Jeni': 'Rasio_Jeni', 'Rasio_Kepa': 'Rasio_Kepa', 'Rasio_PM': 'Rasio_PM', 'Rasio_Umur': 'Rasio_Umur', 'Rasio_Disa': 'Rasio_Disa', 'IKS': 'IKS', });
lyr_KerentananBencanaBanjir_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Dusun': 'TextEdit', 'Luas_1': 'TextEdit', 'Indeks_Ren': 'TextEdit', 'IKL': 'TextEdit', 'IKF': 'TextEdit', 'IKE': 'TextEdit', 'INDEKS_TOT': 'TextEdit', });
lyr_KerentananEkonomi_2.set('fieldImages', {'Id': 'Range', 'NAMOBJ': 'TextEdit', 'Luas': 'TextEdit', 'Klasifikas': 'TextEdit', 'Penghasian': 'TextEdit', 'Dusun': 'TextEdit', 'p_dusun': 'TextEdit', 'skor': 'TextEdit', });
lyr_KerentananFisik_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_KerentananLingkungan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Lingkungan': 'TextEdit', 'luas_ha': 'TextEdit', 'Shape_Area': 'TextEdit', 'IKL': 'TextEdit', });
lyr_KerentananSosial_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Luas_1': 'TextEdit', 'J_Penduduk': 'TextEdit', 'JP_LK': 'TextEdit', 'JP_PR': 'TextEdit', 'Disabilita': 'TextEdit', 'Rasio_Jeni': 'TextEdit', 'Rasio_Kepa': 'TextEdit', 'Rasio_PM': 'TextEdit', 'Rasio_Umur': 'TextEdit', 'Rasio_Disa': 'TextEdit', 'IKS': 'TextEdit', });
lyr_BatasDusun_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Dusun': 'TextEdit', 'Batas_RW': 'TextEdit', 'Luas_1': 'TextEdit', 'J_Penduduk': 'TextEdit', 'JP_LK': 'TextEdit', 'JP_PR': 'TextEdit', 'U_15_11': 'TextEdit', 'U_12_60': 'Range', 'U___60': 'TextEdit', 'Disabilita': 'TextEdit', 'p_p__600': 'TextEdit', 'J_Pengangg': 'TextEdit', 'Rasio_Jeni': 'TextEdit', 'Rasio_Kepa': 'TextEdit', 'Rasio_PM': 'TextEdit', 'Rasio_Umur': 'TextEdit', 'Rasio_Disa': 'TextEdit', 'IKS': 'TextEdit', });
lyr_KerentananBencanaBanjir_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Dusun': 'hidden field', 'Luas_1': 'header label - visible with data', 'Indeks_Ren': 'hidden field', 'IKL': 'hidden field', 'IKF': 'hidden field', 'IKE': 'hidden field', 'INDEKS_TOT': 'inline label - visible with data', });
lyr_KerentananEkonomi_2.set('fieldLabels', {'Id': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'Luas': 'inline label - always visible', 'Klasifikas': 'no label', 'Penghasian': 'inline label - visible with data', 'Dusun': 'inline label - visible with data', 'p_dusun': 'inline label - visible with data', 'skor': 'hidden field', });
lyr_KerentananFisik_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', });
lyr_KerentananLingkungan_4.set('fieldLabels', {'OBJECTID': 'no label', 'Lingkungan': 'inline label - visible with data', 'luas_ha': 'inline label - visible with data', 'Shape_Area': 'hidden field', 'IKL': 'inline label - visible with data', });
lyr_KerentananSosial_5.set('fieldLabels', {'NAMOBJ': 'hidden field', 'Luas_1': 'no label', 'J_Penduduk': 'hidden field', 'JP_LK': 'hidden field', 'JP_PR': 'hidden field', 'Disabilita': 'hidden field', 'Rasio_Jeni': 'inline label - visible with data', 'Rasio_Kepa': 'inline label - visible with data', 'Rasio_PM': 'inline label - visible with data', 'Rasio_Umur': 'inline label - visible with data', 'Rasio_Disa': 'inline label - visible with data', 'IKS': 'inline label - visible with data', });
lyr_BatasDusun_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Dusun': 'no label', 'Batas_RW': 'no label', 'Luas_1': 'no label', 'J_Penduduk': 'no label', 'JP_LK': 'no label', 'JP_PR': 'no label', 'U_15_11': 'no label', 'U_12_60': 'no label', 'U___60': 'no label', 'Disabilita': 'no label', 'p_p__600': 'no label', 'J_Pengangg': 'no label', 'Rasio_Jeni': 'no label', 'Rasio_Kepa': 'no label', 'Rasio_PM': 'no label', 'Rasio_Umur': 'no label', 'Rasio_Disa': 'no label', 'IKS': 'no label', });
lyr_BatasDusun_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});