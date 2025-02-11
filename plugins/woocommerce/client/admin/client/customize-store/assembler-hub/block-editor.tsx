/**
 * External dependencies
 */
import { BlockInstance } from '@wordpress/blocks';
import { memo } from 'react';
import { EditorSettings } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import BlockPreview from './block-preview';
import Iframe from './iframe';

export const BlockEditor = memo(
	( {
		renderedBlocks,
		settings,
		additionalStyles,
		isScrollable,
		onChange,
	}: {
		renderedBlocks: BlockInstance[];
		settings: EditorSettings & {
			styles: string[];
			[ key: string ]: unknown;
		};
		additionalStyles: string;
		isScrollable: boolean;
		onChange: (
			blocks: BlockInstance[],
			options: Record< string, unknown >
		) => void;
	} ) => {
		return (
			<div className="woocommerce-customize-store__block-editor">
				<div className={ 'woocommerce-block-preview-container' }>
					<BlockPreview
						blocks={ renderedBlocks }
						onChange={ onChange }
						settings={ settings }
						additionalStyles={ additionalStyles }
						isScrollable={ isScrollable }
						// Don't use sub registry so that we can get the logo block from the main registry on the logo sidebar navigation screen component.
						useSubRegistry={ false }
						autoScale={ false }
						setLogoBlockContext={ true }
						CustomIframeComponent={ Iframe }
						isPatternPreview={ false }
					/>
				</div>
			</div>
		);
	}
);
