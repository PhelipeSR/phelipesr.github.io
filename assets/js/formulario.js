function show_hide_button(num){
	if (num == 1) {
		$('#btn_proximo').removeClass('d-none');
		$('#btn_anterior').addClass('d-none');
	}else if(num == 11){
		$('#btn_proximo').addClass('d-none');
		$('#btn_anterior').removeClass('d-none');
	}else{
		$('#btn_proximo').removeClass('d-none');
		$('#btn_anterior').removeClass('d-none');
	}
}

function add_objetivos_metas(){
	var html = `
		<div class="slide bg-light p-3 border mb-3" style="display:none">
			<div class="float-right">
				<span title="Deletar" class="text-danger remove_source" style="cursor: pointer;"><i class="fas fa-times-circle fa-sm"></i></span>
			</div>
			<div class="clearfix"></div>
			<div class="form-row">
				<div class="form-group col-md-10">
					<label for="">Município do Polo</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-group col-md-2">
					<label for="">UF</label>
					<select class="form-control">
						<option value=""></option>
						<option value="AC">AC</option>
						<option value="AL">AL</option>
						<option value="AP">AP</option>
						<option value="AM">AM</option>
						<option value="BA">BA</option>
						<option value="CE">CE</option>
						<option value="DF">DF</option>
						<option value="ES">ES</option>
						<option value="GO">GO</option>
						<option value="MA">MA</option>
						<option value="MT">MT</option>
						<option value="MS">MS</option>
						<option value="MG">MG</option>
						<option value="PA">PA</option>
						<option value="PB">PB</option>
						<option value="PR">PR</option>
						<option value="PE">PE</option>
						<option value="PI">PI</option>
						<option value="RJ">RJ</option>
						<option value="RN">RN</option>
						<option value="RS">RS</option>
						<option value="RO">RO</option>
						<option value="RR">RR</option>
						<option value="SC">SC</option>
						<option value="SP">SP</option>
						<option value="SE">SE</option>
						<option value="TO">TO</option>
					</select>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-lg-2">
					<label>Vagas Aprovadas</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-2">
					<label>Vagas Ocupadas</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-2">
					<label>Alunos Ativos</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-2">
					<label>Alunos Concluintes</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-2">
					<label>Mês/Ano Início</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-group col-lg-2">
					<label>Mês/Ano Término</label>
					<input type="text" class="form-control">
				</div>
			</div>
		</div>
	`;
	$('#cont_objetivos_metas').append(html);
	$('.slide').slideDown(300);
}

function add_equipe(){
	var html = `
		<div class="slide bg-light p-3 border mb-3" style="display:none">
			<div class="float-right">
				<span title="Deletar" class="text-danger remove_source" style="cursor: pointer;"><i class="fas fa-times-circle fa-sm"></i></span>
			</div>
			<div class="clearfix"></div>
			<div class="form-row">
				<div class="form-group col-md-9">
					<label for="">Nome Completo</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-group col-md-3">
					<label for="">CPF</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-lg-6">
					<label>Função Na UAB</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-group col-lg-6">
					<label>Vínculo Com a UnB</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-lg-6">
					<label>Sintese Das Atividades Realizadas</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-group col-lg-6">
					<label>Perído de Vinculação</label>
					<input type="text" class="form-control">
				</div>
			</div>
		</div>
	`;
	$('#cont_equipe').append(html);
	$('.slide').slideDown(300);
}

function add_quadro_1(){
	var html = `
		<div class="slide bg-light p-3 border mb-3" style="display:none">
			<div class="float-right">
				<span title="Deletar" class="text-danger remove_source" style="cursor: pointer;"><i class="fas fa-times-circle fa-sm"></i></span>
			</div>
			<div class="clearfix"></div>
			<div class="form-row">
				<div class="form-group col-md-12">
					<label for="">Curso/Disciplina</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-lg-12">
					<label>Público Alvo</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-lg-3">
					<label>Número de Vagas Ofertadas</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-3">
					<label>Número de Alunos Matriculados</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-3">
					<label>Número de Alunos Concluintes</label>
					<input type="number" class="form-control">
				</div>
				<div class="form-group col-lg-3">
					<label>Número de Alunos Desistentes</label>
					<input type="number" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Descreva os Impáctos Desta Ação</label>
					<textarea class="form-control" rows="3"></textarea>
				</div>
			</div>
		</div>
	`;
	$('#cont_quadro_1').append(html);
	$('.slide').slideDown(300);
}

function add_quadro_2(){
	var html = `
		<div class="slide bg-light p-3 border mb-3" style="display:none">
			<div class="float-right">
				<span title="Deletar" class="text-danger remove_source" style="cursor: pointer;"><i class="fas fa-times-circle fa-sm"></i></span>
			</div>
			<div class="clearfix"></div>
			<div class="form-row">
				<div class="form-group col-md-12">
					<label>Público Alvo</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Tipo</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="virtual1" name="tipo1" class="custom-control-input">
						<label class="custom-control-label" for="virtual1">Virtual</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="impresso1" name="tipo1" class="custom-control-input">
						<label class="custom-control-label" for="impresso1">Impresso</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Acesso</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="restrito1" name="acesso1" class="custom-control-input">
						<label class="custom-control-label" for="restrito1">Restrito</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="livre1" name="acesso1" class="custom-control-input">
						<label class="custom-control-label" for="livre1">livre</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Disponibilidade</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="midia1" name="disponibilidade1" class="custom-control-input">
						<label class="custom-control-label" for="midia1">Mídia Digital</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="impresso_1" name="disponibilidade1" class="custom-control-input">
						<label class="custom-control-label" for="impresso_1">Impresso</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="link1" name="disponibilidade1" class="custom-control-input">
						<label class="custom-control-label" for="link1">Link URL</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Pode Ser Compartilhado Com Outras IES</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sim1" name="compartilhado1" class="custom-control-input">
						<label class="custom-control-label" for="sim1">Sim</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="nao1" name="compartilhado1" class="custom-control-input">
						<label class="custom-control-label" for="nao1">Não</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Descreva os Impáctos Desta Ação</label>
					<textarea class="form-control" rows="3"></textarea>
				</div>
			</div>
		</div>
	`;
	$('#cont_quadro_2').append(html);
	$('.slide').slideDown(300);
}

function add_materiais(){
	var html = `
		<div class="slide bg-light p-3 border mb-3" style="display:none">
			<div class="float-right">
				<span title="Deletar" class="text-danger remove_source" style="cursor: pointer;"><i class="fas fa-times-circle fa-sm"></i></span>
			</div>
			<div class="clearfix"></div>
			<div class="form-row">
				<div class="form-group col-md-12">
					<label>Público Alvo</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Tipo</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="virtual_materiais_1" name="tipo_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="virtual_materiais_1">Virtual</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="impresso_materiais_1" name="tipo_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="impresso_materiais_1">Impresso</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Acesso</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="restrito_materiais_1" name="acesso_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="restrito_materiais_1">Restrito</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="livre_materiais_1" name="acesso_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="livre_materiais_1">livre</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Disponibilidade</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="midia_materiais_1" name="disponibilidade_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="midia_materiais_1">Mídia Digital</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="impresso_materiais_1_" name="disponibilidade_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="impresso_materiais_1_">Impresso</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="link_materiais_1" name="disponibilidade_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="link_materiais_1">Link URL</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Pode Ser Compartilhado Com Outras IES</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sim_materiais_1" name="compartilhado_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="sim_materiais_1">Sim</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="nao_materiais_1" name="compartilhado_materiais_1" class="custom-control-input">
						<label class="custom-control-label" for="nao_materiais_1">Não</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Descreva os Impáctos Desta Ação</label>
					<textarea class="form-control" rows="3"></textarea>
				</div>
			</div>
		</div>
	`;
	$('#cont_materiais').append(html);
	$('.slide').slideDown(300);
}

function add_softwares(){
	var html = `
		<div class="slide bg-light p-3 border mb-3" style="display:none">
			<div class="float-right">
				<span title="Deletar" class="text-danger remove_source" style="cursor: pointer;"><i class="fas fa-times-circle fa-sm"></i></span>
			</div>
			<div class="clearfix"></div>
			<div class="form-row">
				<div class="form-group col-md-12">
					<label>Público Alvo</label>
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Acesso</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="restrito_software_1" name="acesso_software_1" class="custom-control-input">
						<label class="custom-control-label" for="restrito_software_1">Restrito</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="livre_software_1" name="acesso_software_1" class="custom-control-input">
						<label class="custom-control-label" for="livre_software_1">livre</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Disponibilidade</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="midia_software_1" name="disponibilidade_software_1" class="custom-control-input">
						<label class="custom-control-label" for="midia_software_1">Mídia Digital</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="impresso_software_1" name="disponibilidade_software_1" class="custom-control-input">
						<label class="custom-control-label" for="impresso_software_1">Impresso</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="link_software_1" name="disponibilidade_software_1" class="custom-control-input">
						<label class="custom-control-label" for="link_software_1">Link URL</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Pode Ser Compartilhado Com Outras IES</label><br>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sim_software_1" name="compartilhado_software_1" class="custom-control-input">
						<label class="custom-control-label" for="sim_software_1">Sim</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="nao_software_1" name="compartilhado_software_1" class="custom-control-input">
						<label class="custom-control-label" for="nao_software_1">Não</label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col">
					<label>Descreva os Impáctos Desta Ação</label>
					<textarea class="form-control" rows="3"></textarea>
				</div>
			</div>
		</div>
	`;
	$('#cont_softwares').append(html);
	$('.slide').slideDown(300);
}

$(document).ready(function($) {

	var step = 1;

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Configura o date range picker
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('input[name="periodo"]').daterangepicker({
		autoUpdateInput: false,
		drops: 'up',
		locale: {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Aplicar",
            "cancelLabel": "Cancelar",
            "fromLabel": "De",
            "toLabel": "Para",
            "customRangeLabel": "Personalizado",
            "daysOfWeek": [
                "Dom",
                "Seg",
                "Ter",
                "Qua",
                "Qui",
                "Sex",
                "Sab"
            ],
            "monthNames": [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            "firstDay": 0
        },
	});
	$('input[name="periodo"]').on('apply.daterangepicker', function(ev, picker) {
		$(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
	});
	$('input[name="periodo"]').on('cancel.daterangepicker', function(ev, picker) {
		$(this).val('');
	});

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Controla o botão de próximo e anterior
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('#btn_proximo').click(function(event) {
		$('#btn_proximo, #btn_anterior').prop("disabled",true);
		step += 1;
		$('#myTab a[href="#tab-step-'+step+'"]').tab('show');
		show_hide_button(step);
	});
	$('#btn_anterior').click(function(event) {
		$('#btn_proximo, #btn_anterior').prop("disabled",true);
		step -= 1;
		$('#myTab a[href="#tab-step-'+step+'"]').tab('show');
		show_hide_button(step);
	});
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('#btn_proximo, #btn_anterior').prop("disabled",false);
		step = parseInt($(this).data('step'));
		show_hide_button(step)
	});

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Insere mais um item em Objetivos e Metas
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('#btn_add_objetivos').click(function(event) {
		add_objetivos_metas();
	});

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Insere mais um item em Equipe
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('#btn_add_equipe').click(function(event) {
		add_equipe();
	});

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Insere mais um item em Quadro 1
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('#btn_add_quadro_1').click(function(event) {
		add_quadro_1();
	});

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Insere mais um item em Quadro 2
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('#btn_add_quadro_2').click(function(event) {
		add_quadro_2();
	});

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// Insere mais um item em Recursos
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	$('#btn_add_materiais').click(function(event) {
		add_materiais();
	});
	$('#btn_add_softwares').click(function(event) {
		add_softwares();
	});


	$(document).on('click', '.remove_source', function(event) {
		div = $(this).parent().parent();
		div.slideUp(600,function(){
			$(this).remove();
		});
	});

	tinymce.init({
		selector: '.tinymce', // seletor
		height: 200, //altura do campo editavel
		branding: false, //retira a marca do editor
		image_advtab: true, // Funções adicionais para imagem e vídeo
		browser_spellcheck: true, // Corretor ortográfico
		language: 'pt_BR', // Tradução do editor
		plugin_preview_width: 900, // Tamanho da janela de pré visualização
		// Plugins carregados
		plugins: ['importcss code print preview searchreplace autolink visualblocks visualchars','image link media template codesample table charmap hr nonbreaking anchor','emoticons insertdatetime advlist lists textcolor wordcount contextmenu colorpicker help'],

		// Barra de ferramentas
		toolbar1: 'undo redo | fontselect | fontsizeselect | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify',
		toolbar2: 'image media | formatselect | link unlink | numlist bullist | outdent indent | removeformat | subscript superscript',
		toolbar3: 'cut copy paste | searchreplace print preview visualblocks | template charmap nonbreaking code |  anchor emoticons print | help',

		// Arquivos CSS externos
		content_css: [
			'//stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
		],
		content_style: ".mce-content-body {font-size:15px;font-family:Arial,sans-serif;}",

		// Configurações do plugin Imagem
		image_caption: true, // adiciona opção de legenda para imagem
		image_class_list: [ // Classes que usuários podem colocar em imagens
			{title: 'None', value: ''},
			{title: 'Moudura', value: 'img-thumbnail img-fluid'},
			{title: 'Circular', value: 'rounded-circle img-fluid'},
			{title: 'Borda', value: 'rounded img-fluid'},
		],
		image_title: true,

		// Configurações de quebra de linha
		nonbreaking_force_tab: true,

		// Configurações da tabela
		extended_valid_elements: "img[class=img-fluid|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name],table[class=table table-bordered table-striped]",

		table_class_list: [
			{title: 'None', value: ''},
			{title: 'Tabela Pequena', value: 'table-sm table table-bordered table-striped'},
			{title: 'Retirar striped', value: 'table table-bordered'},
		],
	});
});