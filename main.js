const headings=['What is Pollution?', 'Air Pollution', 'Water Pollution', 'Land Pollution', 'Noise Pollution', 'Plastic Pollution', 'Light Pollution', 'Thermal Pollution', 'Electronic Pollution',] //hehehe this one made me wanna go insane
const images=['pol.jpg', 'ap.jpg', 'wp.jpg', 'lp.jpg', 'np.jpg', 'ppol.jpg', 'lip.jpg', 'tp.jpg', 'ep.jpg']
const polp =["Pollution is the introduction of contaminants into the natural environment that cause harm. Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants.  Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have a human source, such as manufacturing, extractive industries, poor waste management, transportation or agriculture. Pollution is often classed as point source (coming from a highly concentrated specific site, such as a factory, mine, construction site), or nonpoint source pollution (coming from a widespread distributed sources, such as microplastics or agricultural runoff).",
			"Air pollution is the presence of substances in the air that are harmful to humans, other living beings or the environment. Pollutants can be gases, like ozone or nitrogen oxides, or small particles like soot and dust. Both outdoor and indoor air can be polluted. Outdoor air pollution comes from burning fossil fuels for electricity and transport, wildfires, some industrial processes, waste management, demolition and agriculture. Indoor air pollution is often from burning firewood or agricultural waste for cooking and heating. Other sources of air pollution include dust storms and volcanic eruptions. Many sources of local air pollution, especially burning fossil fuels, also release greenhouse gases that cause global warming.",
			"Water pollution is the contamination of water bodies, with a negative impact on their uses.It is usually a result of human activities. Water bodies include lakes, rivers, oceans, aquifers, reservoirs and groundwater. Water pollution results when contaminants mix with these water bodies. Contaminants can come from one of four main sources. These are sewage discharges, industrial activities, agricultural activities, and urban runoff. Water pollution may affect either surface water or groundwater. This form of pollution can lead to many problems. One is the degradation of aquatic ecosystems. Another is spreading water-borne diseases when people use polluted water for drinking or irrigation.  Water pollution also reduces the ecosystem services such as drinking water provided by the water resource.",
			"Land pollution is the deposition of solid or liquid waste materials on land or underground in a manner that can contaminate the soil and groundwater, threaten public health, and cause unsightly conditions and nuisances. The waste materials that cause land pollution are broadly classified as municipal solid waste (MSW, also called municipal refuse), construction and demolition (C&D) waste or debris, and hazardous waste. MSW includes nonhazardous garbage, rubbish, and trash from homes, institutions , commercial establishments, and industrial facilities. Garbage contains moist and decomposable food wastes, rubbish comprises mostly dry materials such as paper, glass, textiles, and plastic objects; and trash includes bulky waste materials and objects that are not collected routinely for disposal.",
			"Noise pollution, or sound pollution, is the propagation of noise or sound with potential harmful effects on humans and animals. The source of outdoor noise worldwide is mainly caused by machines, transport and propagation systems.Poor urban planning may give rise to noise disintegration or pollution. Side-by-side industrial and residential buildings can result in noise pollution in the residential areas. Some of the main sources of noise in residential areas include loud music, transportation (traffic, rail, airplanes, etc.), lawn care maintenance, construction, electrical generators, wind turbines, explosions, and people. Documented problems associated with noise in urban environments go back as far as ancient Rome.",
			"Plastic pollution is the accumulation of plastic objects and particles (e.g. plastic bottles, bags and microbeads) in the Earth's environment that adversely affects humans, wildlife and their habitat. Plastics that act as pollutants are categorized by size into micro-, meso-, or macro debris. Plastics are inexpensive and durable, making them very adaptable for different uses; as a result, manufacturers choose to use plastic over other materials.[4] However, the chemical structure of most plastics renders them resistant to many natural processes of degradation and as a result they are slow to degrade. Together, these two factors allow large volumes of plastic to enter the environment as mismanaged waste which persists in the ecosystem and travels throughout food webs.",
			"Light pollution is the presence of any unwanted, inappropriate, or excessive artificial lighting. In a descriptive sense, the term light pollution refers to the effects of any poorly implemented lighting sources, during the day or night. Light pollution can be understood not only as a phenomenon resulting from a specific source or kind of pollution, but also as a contributor to the wider, collective impact of various sources of pollution.  Although this type of pollution can exist throughout the day, its effects are magnified during the night with the contrast of the sky's darkness. It has been estimated that 83% of the world's people live under light-polluted skies and that 23% of the world's land area is affected by skyglow.",
			"Thermal pollution is the degradation of water quality by any process that changes ambient water temperature. Thermal pollution is the rise or drop in the temperature of a natural body of water caused by human influence. Thermal pollution, unlike chemical pollution, results in a change in the physical properties of water. A common cause of thermal pollution is the use of water as a coolant by power plants and industrial manufacturers. Urban runoff—stormwater discharged to surface waters from rooftops, roads, and parking lots—and reservoirs can also be a source of thermal pollution. Thermal pollution can also be caused by the release of very cold water from the base of reservoirs into warmer rivers.",
			"Electronic waste (or e-waste) describes discarded electrical or electronic devices. It is also commonly known as end-of-life (EOL) electronics. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste. Informal processing of e-waste in developing countries can lead to adverse human health effects and environmental pollution. The growing consumption of electronic goods due to the Digital Revolution and innovations in science and technology, such as bitcoin, has led to a global e-waste problem and hazard. The rapid exponential increase of e-waste is due to frequent new model releases and unnecessary purchases of electrical and electronic equipment, short innovation cycles and low recycling rates, and a drop in the average life span of computers."]
            
            //alot and I mean ALOT of text
let index=0
let head =document.getElementById('paraheading')
let imge =document.getElementById('changing')
let pol =document.getElementById('para')


//Functions

function changingf() {
	index=index+1;
	if (index>=9) {
		index=0;
	}
	head.textContent=headings[index]
	pol.textContent=polp[index]
	imge.src=images[index]
	document.getElementById("chpol").textContent= index+1; // this is to make sure the first num is 1 and not 0 also now it goes up to 9 instead of 8
}


function changingb() {
	index=index-1;
	if (index<0) {
		index=8;
	}
	head.textContent=headings[index]
	pol.textContent=polp[index]
	imge.src=images[index]
	document.getElementById("chpol").textContent= index+1;  // this is to make sure the numbers dont break when you decrease eg:(going back from 9 would put u at 7 instead of 8)
}

//also this was written by me AND NOT AI jus to make sure (: