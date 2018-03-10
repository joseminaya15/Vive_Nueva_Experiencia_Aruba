function cambiarLugar(){
	var cardevento = $('#card-evento');
	var idioma     = $('#selCiudad').val();
	var canal      = $('.mdl-card').find('h3');
	var lugar      = $('.mdl-card h2').find('a');
	var direccion  = $('.mdl-card').find('p');
	var googlemaps = $('.google-maps').find('iframe');
	$('.contenido-evento').fadeIn();
	if(idioma == 'Torreon') {
		cardevento.css("background-color","#D5D654");
		canal.text('Canal - CASS');
		lugar.text('Hotel Real inn');
		direccion.text('Blvd. Independencia 3595 Ote., Residencial el Fresno, 27018 Torreón, Coah.');
		lugar.attr({
			"href"  : 'http://www.hotelesrealinn.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.839050295922!2d-103.41306258498285!3d25.577020983720903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86947f554387328f%3A0x2ec6db0c9149a70c!2sReal+Inn+Torreon!5e0!3m2!1ses-419!2spe!4v1520637356911'
		});
	}else if(idioma == 'Saltillo') {
		cardevento.css("background-color","#757679");
		canal.text('Canal - CIISA');
		lugar.text('Camino Real');
		direccion.text('Blvd. los Fundadores 2000, San José de los Cerritos, 25298 Saltillo, Coah.');
		lugar.attr({
			"href"  : 'https://www.caminoreal.com/Hotels/Details/CR/SLW'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.74823414779!2d-100.941695!3d25.432009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x191a3e3c1f33dbea!2sCamino+Real+Saltillo!5e0!3m2!1ses-419!2spe!4v1520637479458'
		});
	}else if(idioma == 'Morelia') {
		cardevento.css("background-color","#008375");
		canal.text('Canal - Grupo Site');
		lugar.text('Gamma de Fiesta inn Beló');
		direccion.text('De Av. Camelinas 2938, Cinco de Diciembre, 58280 Morelia, Mich.');
		lugar.attr({
			"href"  : 'http://www.gammahoteles.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.6393963449914!2d-101.16558008508936!3d19.685384086741198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0df8455d0899%3A0x784393c748b541ba!2sGamma+de+Fiesta+Inn+Morelia+Bel%C3%B3!5e0!3m2!1ses-419!2spe!4v1520637535244'
		});
	}else if(idioma == 'Cuernavaca') {
		cardevento.css("background-color","#094875");
		canal.text('Canal - CONEC-TA');
		lugar.text('Holiday inn Cuernavaca');
		direccion.text('Blvd. Gustavo Díaz Ordaz 86, Acapantzingo, 62440 Cuernavaca, Mor.');
		lugar.attr({
			"href"  : 'http://ihg.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60381.62812111689!2d-99.2477301!3d18.9379547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfa78a7fde11%3A0x8fe857d41a5f7fa1!2sHoliday+Inn+Cuernavaca!5e0!3m2!1ses-419!2spe!4v1520637636190'
		});
	}else if(idioma == 'CDMX1') {
		cardevento.css("background-color","#9FD4C9");
		canal.text('Canal - SYCOD');
		lugar.text('Hotel Barceló México Reforma');
		direccion.text('Paseo de La Reforma Nte 1, Tabacalera, 06030 Ciudad de México, CDMX');
		lugar.attr({
			"href"  : 'http://barcelo.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15049.887998132157!2d-99.150988!3d19.4352064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa83028dc76da793c!2sBarcel%C3%B3+M%C3%A9xico+Reforma!5e0!3m2!1ses-419!2spe!4v1520637684695'
		});
	}else if(idioma == 'CDMX2') {
		cardevento.css("background-color","#D5D654");
		canal.text('Canal - Bmobile');
		lugar.text('Hotel Barceló México Reforma');
		direccion.text('Paseo de La Reforma Nte 1, Tabacalera, 06030 Ciudad de México, CDMX');
		lugar.attr({
			"href"  : 'http://barcelo.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15049.887998132157!2d-99.150988!3d19.4352064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa83028dc76da793c!2sBarcel%C3%B3+M%C3%A9xico+Reforma!5e0!3m2!1ses-419!2spe!4v1520637733075'
		});
	}else if(idioma == 'CDMX3') {
		cardevento.css("background-color","#757679");
		canal.text('Canal - DC Solutions');
		lugar.text('Hotel Barceló México Reforma');
		direccion.text('Paseo de La Reforma Nte 1, Tabacalera, 06030 Ciudad de México, CDMX');
		lugar.attr({
			"href"  : 'http://barcelo.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15049.887998132157!2d-99.150988!3d19.4352064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa83028dc76da793c!2sBarcel%C3%B3+M%C3%A9xico+Reforma!5e0!3m2!1ses-419!2spe!4v1520637866933'
		});
	}else if(idioma == 'CDMX4') {
		cardevento.css("background-color","#008375");
		canal.text('Canal - SISA');
		lugar.text('Hotel Barceló México Reforma');
		direccion.text('Paseo de La Reforma Nte 1, Tabacalera, 06030 Ciudad de México, CDMX');
		lugar.attr({
			"href"  : 'http://barcelo.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15049.887998132157!2d-99.150988!3d19.4352064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa83028dc76da793c!2sBarcel%C3%B3+M%C3%A9xico+Reforma!5e0!3m2!1ses-419!2spe!4v1520637977658'
		});
	}else if(idioma == 'Pachuca') {
		cardevento.css("background-color","#094875");
		canal.text('Canal - CONEC-TA');
		lugar.text('Camino Real Pachuca');
		direccion.text('Camino Real de La Plata Lote 15 Manzana 3, Zona Plateada, 42083 Pachuca, Hgo.');
		lugar.attr({
			"href"  : 'https://caminoreal.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.9318382702363!2d-98.7727786850828!3d20.095135986511483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a093663c7d0b%3A0xcaee3f8267f05057!2sCamino+Real+Pachuca!5e0!3m2!1ses-419!2spe!4v1520638017738'
		});
	}else if(idioma == 'Monterrey') {
		cardevento.css("background-color","#9FD4C9");
		canal.text('Canal - Microplus');
		lugar.text('Gamm Fiesta Americana Gran Hotel Ancira');
		direccion.text('Av. Melchor Ocampo No.443 Oriente, Centro, 64000 Monterrey, N.L.');
		lugar.attr({
			"href"  : 'http://www.gammahoteles.com/es/home'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3596.171495208233!2d-100.317208!3d25.6656092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866296710b2ebd95%3A0xed468a61529236f3!2sGamma+Monterrey+Gran+Hotel+Ancira!5e0!3m2!1ses-419!2spe!4v1520638069203'
		});
	}else if(idioma == 'Tampico') {
		cardevento.css("background-color","#D5D654");
		canal.text('Canal - Solucomsa');
		lugar.text('Camino Real Tampico');
		direccion.text('Av. Miguel Hidalgo 2000, Smith, 89140 Tampico, Tamps.');
		lugar.attr({
			"href"  : 'https://caminoreal.com/'
		});
		googlemaps.attr({
			"src"  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.9765110506987!2d-97.87250568504638!3d22.24096998535445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7f9ffbbab4b75%3A0x3a49defb532f68e4!2sCamino+Real+Tampico!5e0!3m2!1ses-419!2spe!4v1520638104198'
		});
	}else{
		$('.contenido-evento').fadeOut();
	}
}