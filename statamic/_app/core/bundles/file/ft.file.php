<?php

use Symfony\Component\Finder\Finder as Finder;

class Fieldtype_File extends Fieldtype
{
	public function render()
	{
		// Let's make sure they set an upload destination
		if (array_get($this->field_config, 'destination', false) === false) {
			throw new Exception("You need to set a destination for your File field.");
		}

		if ($this->field_data) {

			$file = Path::toAsset($this->field_data);

			$html  = "<div class='file-field-container file-exists'>";
			$html .= "<div>";

			if (File::isImage(Path::fromAsset($this->field_data, true))) {
				$html .= "<img src='{$file}' height='58'>";
			}

			$html .= "<p>".basename($this->field_data)."</p>";
			$html .= "<a class='btn btn-small btn-remove-file' href='#'>".Localization::fetch('remove')."</a>";
			$html .= "</div>";
			$html .= $this->makeFileSelect($file);

		} else {

			$html = "<div class='file-field-container'>";
			$html .= "<div class='upload-file'>";
			$html .= "<p><input type='file' name='{$this->fieldname}' tabindex='{$this->tabindex}' value='' /></p>";
			$html .= $this->makeFileSelect();
			$html .= "</div>";

		}

		$html .= "</div>";

		return $html;
	}

	private function makeFileSelect($selected_file = null)
	{
		$html = "<span class='btn btn-file-browse'><span class='ss-icon'>openfolder</span></span>";
		$html .= "<p><select name='{$this->fieldname}' style='display:none'>";
		$html .= "<option value=''>Select a file...</option>";

		$path = Path::assemble(BASE_PATH, array_get($this->field_config, 'destination'));

		$finder = new Finder();

		// Set folder location
		$finder->in($path);

		// Limit by depth
		$finder->depth = array_get($this->field_config, 'depth', '<1');

		// Limit by file extension
		foreach (array_get($this->field_config, array('allowed', 'types'), array()) as $ext) {
			$finder->name("*.{$ext}");
		}

		// Fetch matches
		$matches = $finder->files()->followLinks();

		// Build HTML options
		foreach ($matches as $file) {

			$filename = Path::toAsset($file->getPathname(), false);
			$display_name = ltrim(str_replace($path, '', $file->getPathname()), '/');
			$selected = ($selected_file === $filename) ? 'selected' : '';

			$html .= "<option value='{$filename}' {$selected}>" . $display_name . "</option>";
		}


		$html .= '</select></p>';

		return $html;
	}

	public function process()
	{
		if ($this->field_data['tmp_name'] !== '') {
			return File::upload($this->field_data, $this->settings['destination'], true);
		}
	}

}
