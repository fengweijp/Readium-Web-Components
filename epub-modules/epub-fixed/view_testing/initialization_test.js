var initializationTest = function () {
    
    var packageDocumentXML = '<?xml version="1.0" encoding="UTF-8"?> \
<package xmlns="http://www.idpf.org/2007/opf" prefix="cc: http://creativecommons.org/ns# rendition: http://www.idpf.org/vocab/rendition/#" version="3.0" unique-identifier="bookid" xml:lang="fr" dir="ltr" id="package"> \
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/"> \
      <dc:identifier id="bookid">code.google.com.epub-samples.page-blanche</dc:identifier> \
      <meta refines="#bookid" property="identifier-type" scheme="onix:codelist5">01</meta> \
      <dc:language>fr</dc:language> \
      <dc:title id="title">Page Blanche</dc:title> \
      <meta refines="#title" property="title-type">main</meta> \
      <dc:creator id="creator1">Boulet</dc:creator> \
      <meta refines="#creator1" property="file-as">Boulet</meta> \
      <meta refines="#creator1" property="role" scheme="marc:relators">aut</meta> \
      <meta refines="#creator1" property="display-seq">1</meta> \
      <dc:creator id="creator2">Bagieu Pénélope</dc:creator> \
      <meta refines="#creator2" property="file-as">Bagieu, Pénélope</meta> \
      <meta refines="#creator2" property="role" scheme="marc:relators">ill</meta> \
      <meta refines="#creator2" property="display-seq">2</meta> \
      <dc:publisher>éditions Delcourt</dc:publisher> \
      <dc:date>2012-01-18</dc:date> \
        <dc:rights xml:lang="en">This work is shared with the public using the Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.</dc:rights> \
        <link rel="cc:license" href="http://creativecommons.org/licenses/by-sa/3.0/"/> \
        <dc:contributor id="contributor">Vincent Gros</dc:contributor> \
        <meta refines="#contributor" property="role" scheme="marc:relators">mrk</meta> \
        <meta refines="#contributor" property="file-as">Gros, Vincent</meta> \
        <meta property="dcterms:modified">2012-08-28T18:00:00Z</meta> \
      <meta property="rendition:layout">pre-paginated</meta> \
      <meta property="rendition:orientation">auto</meta> \
      <meta property="rendition:spread">auto</meta> \
      <meta name="cover" content="cover"/> \
   </metadata> \
   <manifest> \
      <item id="css" href="Style/style.css" media-type="text/css"/> \
      <item id="nav" href="Navigation/nav.xhtml" properties="nav" media-type="application/xhtml+xml"/> \
      <item id="ncx" href="Navigation/toc.ncx" media-type="application/x-dtbncx+xml" /> \
      <item id="id-cover-xhtml" href="Content/cover.xhtml" media-type="application/xhtml+xml"/> \
      <item id="white-xhtml" href="Content/PageBlanche_Page_000.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_001-xhtml" href="Content/PageBlanche_Page_001.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_002-xhtml" href="Content/PageBlanche_Page_002.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_003-xhtml" href="Content/PageBlanche_Page_003.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_004-xhtml" href="Content/PageBlanche_Page_004.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_005-xhtml" href="Content/PageBlanche_Page_005.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_006-xhtml" href="Content/PageBlanche_Page_006.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_007-xhtml" href="Content/PageBlanche_Page_007.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-PageBlanche_Page_008-xhtml" href="Content/PageBlanche_Page_008.xhtml" media-type="application/xhtml+xml"/> \
      <item id="id-cover-jpg" href="Image/cover.jpg" properties="cover-image" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_001-jpg" href="Image/PageBlanche_Page_001.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_002-jpg" href="Image/PageBlanche_Page_002.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_003-jpg" href="Image/PageBlanche_Page_003.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_004-jpg" href="Image/PageBlanche_Page_004.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_005-jpg" href="Image/PageBlanche_Page_005.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_006-jpg" href="Image/PageBlanche_Page_006.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_007-jpg" href="Image/PageBlanche_Page_007.jpg" media-type="image/jpeg"/> \
      <item id="id-PageBlanche_Page_008-jpg" href="Image/PageBlanche_Page_008.jpg" media-type="image/jpeg"/> \
   </manifest> \
   <spine toc="ncx"> \
      <itemref idref="id-cover-xhtml" properties="page-spread-left"/> \
      <itemref idref="white-xhtml" properties="page-spread-right"/> \
      <itemref idref="id-PageBlanche_Page_001-xhtml" properties="page-spread-left"/> \
      <itemref idref="id-PageBlanche_Page_002-xhtml" properties="page-spread-right"/> \
      <itemref idref="id-PageBlanche_Page_003-xhtml" properties="page-spread-left"/> \
      <itemref idref="id-PageBlanche_Page_004-xhtml" properties="page-spread-right"/> \
      <itemref idref="id-PageBlanche_Page_005-xhtml" properties="page-spread-left"/> \
      <itemref idref="id-PageBlanche_Page_006-xhtml" properties="page-spread-right"/> \
      <itemref idref="id-PageBlanche_Page_007-xhtml" properties="page-spread-left"/> \
      <itemref idref="id-PageBlanche_Page_008-xhtml" properties="page-spread-right"/> \
   </spine> \
</package>'


    var epubParser = new EpubParserModule("epub_content/page-blanche-20121022/EPUB/package.opf", packageDocumentXML);
    var packageDocumentObject = epubParser.parse();
    var epub = new EpubModule(packageDocumentObject, packageDocumentXML);
    var spineInfo = epub.getSpineInfo();
    var spineObjects = spineInfo.spine;

    var viewerSettings = {
        fontSize : 12,
        syntheticLayout : true,
        currentMargin : 3,
        tocVisible : false,
        currentTheme : "default"
    };

    var fixedView = new EpubFixedModule(
        spineObjects,
        viewerSettings
        );

    return fixedView;
};