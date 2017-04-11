function iterationGrid(){
    var resultat = "";
    var listState = ["offduty","sleeper","driving","onduty"]; 
    var listStateFrancais = ["Repos","Couchette", "Conduite", "Travail autre que la conduite"];
    
    resultat += "<div id=\"lineLegende\" class=\"line_template\">";
    resultat += "<div class=\"square_axeX_template left_blank_template\"></div>";
    var i;
    for(i=0; i<25; i++){
        resultat += "<div class=\"square_template\">";
        resultat += "<div id=\"padding\" class=\"template\">";
        resultat += "<div id=\"00m\" class=\"template_size font_axis\">"+i+"</div>";
        resultat += "<div id=\"15m\" class=\"template_size\"></div>";
        resultat += "<div id=\"30m\" class=\"template_size\"></div>";
        resultat += "<div id=\"45m\" class=\"template_size\"></div>";
        resultat += "</div>";
        resultat += "</div>";
    }
    resultat += "</div>";
            
    var state;
    for(state in listState){
        //level line
        resultat += "<div id=\""+listState[state]+"\" class=\"line_template font_legende\">";
        //colomne -legende
        resultat += "<div id=\"axis"+listState[state]+"\" class=\"square_axes_template bottom_template font_legende\">";
        resultat += listStateFrancais[state];
        resultat += "</div>";
        var i;
        for(i=0; i<24; i++){
            //24 squares in level line  
            resultat += "<div id=\""+i+"h\" class=\"square_template\">";

            resultat += "<div id=\"empty\" class=\"template\">";
            resultat += "<div id=\"00m\" class=\"template_size left_template\"></div>";
            resultat += "<div id=\"15m\" class=\"template_size left_blank_template\"></div>";
            resultat += "<div id=\"30m\" class=\"template_size left_blank_template\"></div>";
            resultat += "<div id=\"45m\" class=\"template_size left_blank_template\"></div>";
            resultat += "</div>";
            
            resultat += "<div id=\"padding\" class=\"template\">";
            resultat += "<div id=\"00m\" class=\"template_size left_template\"></div>";
            resultat += "<div id=\"15m\" class=\"template_size left_blank_template\"></div>";
            resultat += "<div id=\"30m\" class=\"template_size left_blank_template\"></div>";
            resultat += "<div id=\"45m\" class=\"template_size left_blank_template\"></div>";
            resultat += "</div>";

            resultat += "<div id=\"middle\" class=\"template\">";
            resultat += "<div id=\"00m\" class=\"template_size left_template\"></div>";
            resultat += "<div id=\"15m\" class=\"template_size left_blank_template\"></div>";
            resultat += "<div id=\"30m\" class=\"template_size left_template\"></div>";
            resultat += "<div id=\"45m\" class=\"template_size left_blank_template\"></div>";
            resultat += "</div>";

            resultat += "<div id=\"bottom\" class=\"template\">";
            resultat += "<div id=\"00m\" class=\"template_size bottom_template left_template\"></div>";
            resultat += "<div id=\"15m\" class=\"template_size bottom_template left_template\"></div>";
            resultat += "<div id=\"30m\" class=\"template_size bottom_template left_template\"></div>";
            resultat += "<div id=\"45m\" class=\"template_size bottom_template left_template\"></div>";
            resultat += "</div>";
            resultat += "</div>";
        }
        //line resultat for each State
        resultat += "<div id=\"24h\" class=\"square_template\">";
        resultat += "<div id=\"empty\" class=\"template_size left_template\"></div>";
        resultat += "<div id=\"padding\" class=\"template\">";
        resultat += "<div id=\"00m\" class=\"template_size left_template\"></div>";
        resultat += "<div id=\"15m\" class=\"template_size left_blank_template font_resultat\">"+state+"0</div>";
        resultat += "</div>";
        resultat += "<div id=\"middle\" class=\"template\">";
        resultat += "<div id=\"00m\" class=\"template_size left_template\"></div>";
        resultat += "</div>";
        resultat += "<div id=\"bottom\" class=\"template\">";
        resultat += "<div id=\"00m\" class=\"template_size left_template bottom_template\"></div>";
        resultat += "<div id=\"15m\" class=\"template_size bottom_template\"></div>";
        resultat += "<div id=\"30m\" class=\"template_size bottom_template\"></div>";
        resultat += "<div id=\"45m\" class=\"template_size bottom_template\"></div>";
        resultat += "</div>";
        resultat += "</div>";
        resultat += "</div>";
    }
    //line axes with signatures
    resultat += "<div id=\"lineLegende\" class=\"line_template \">";
    resultat += "<div class=\"square_axeX_template left_blank_template\"></div>";
    var i;
    for(i=0; i<25; i++){
        resultat += "<div class=\"square_template\">";
        resultat += "<div id=\"padding\" class=\"template\">";
        resultat += "<div id=\"00m\" class=\"template_size font_axis\">"+i+"</div>";
        resultat += "<div id=\"15m\" class=\"template_size\"></div>";
        resultat += "<div id=\"30m\" class=\"template_size\"></div>";
        resultat += "<div id=\"45m\" class=\"template_size\"></div>";
        resultat += "</div>";
        resultat += "</div>";
    }
    resultat += "</div>";
       
    $('#idGrid').html(resultat);
}
