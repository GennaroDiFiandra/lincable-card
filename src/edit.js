import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { cardLink, cardWidth } = attributes;
	const inlineStyles = { "--lincable-card-width": cardWidth };

	const allowedBlocks = [ 'core/heading', 'core/paragraph', 'core/image' ];
	const template = [
		[
			'core/image',
			{  }
		],
		[
			'core/heading',
			{ level: 2, placeholder: "Lincable Card" }
		],
		[
			'core/paragraph',
			{ placeholder: "Add a lincable card with a title, a content and an icon." }
		]
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Card Settings", "lincable-card")}>
					<PanelRow>
						<TextControl
							label={__("Link", "lincable-card")}
							value={cardLink}
							onChange={value => setAttributes({ cardLink: value })}
							help={__("Insert the full URL", "lincable-card")}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Width", "lincable-card")}
							value={cardWidth}
							onChange={value => setAttributes({ cardWidth: value })}
							help={__("Include unit. For example: 100px", "lincable-card")}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps({ style: inlineStyles }) }>
				<InnerBlocks allowedBlocks={allowedBlocks} template={template} templateLock={true} />
			</div>
		</>
	);
}
