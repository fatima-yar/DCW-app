import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_boxes';
  info: {
    description: '';
    displayName: 'Hero Box';
    icon: 'layout';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.btn', false>;
    folowingText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksInfoBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_boxes';
  info: {
    description: '';
    displayName: 'Info Box';
    icon: 'layout';
  };
  attributes: {
    mission: Schema.Attribute.Text;
    projects: Schema.Attribute.Text;
  };
}

export interface BlocksMotto extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mottos';
  info: {
    description: '';
    displayName: 'motto';
    icon: 'pencil';
  };
  attributes: {
    motto: Schema.Attribute.Text;
  };
}

export interface ElementsBtn extends Struct.ComponentSchema {
  collectionName: 'components_elements_btns';
  info: {
    description: '';
    displayName: 'cta';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-box': BlocksHeroBox;
      'blocks.info-box': BlocksInfoBox;
      'blocks.motto': BlocksMotto;
      'elements.btn': ElementsBtn;
    }
  }
}
