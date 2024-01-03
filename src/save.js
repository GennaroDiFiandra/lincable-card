import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { cardLink, cardWidth } = attributes;
	const inlineStyles = { "--lincable-card-width": cardWidth };

	return (
		<>
			{
				cardLink ?
				<a { ...useBlockProps.save({ style: inlineStyles }) } href={cardLink}>
					<InnerBlocks.Content />
				</a> :
				<div { ...useBlockProps.save({ style: inlineStyles }) }>
					<InnerBlocks.Content />
				</div>
			}
		</>
	);
}
