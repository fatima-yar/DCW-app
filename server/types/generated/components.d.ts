import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksArchivedNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_archived_newsletters';
  info: {
    displayName: 'archivedNewsletter';
    icon: 'server';
  };
  attributes: {
    date: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface BlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contents';
  info: {
    description: '';
    displayName: 'contents';
    icon: 'write';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeroBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_boxes';
  info: {
    description: '';
    displayName: 'Hero Box';
    icon: 'layout';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.btn', false>;
    followingText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageUK: Schema.Attribute.Media<'images'>;
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
    missionNZ: Schema.Attribute.Text;
    missionNZImage: Schema.Attribute.Media<'images' | 'files'>;
    missionUK: Schema.Attribute.Text;
    missionUKImage: Schema.Attribute.Media<'images' | 'files'>;
    serviceNZ: Schema.Attribute.Text;
    serviceNZImage: Schema.Attribute.Media<'images' | 'files'>;
    serviceUK: Schema.Attribute.Text;
    serviceUKImage: Schema.Attribute.Media<'images' | 'files'>;
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

export interface BlocksPhoto extends Struct.ComponentSchema {
  collectionName: 'components_blocks_photos';
  info: {
    description: '';
    displayName: 'photo';
    icon: 'landscape';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksServicePhoto extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_photos';
  info: {
    displayName: 'servicePhoto';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.String;
    captionUrl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    moreText: Schema.Attribute.String;
    moreUrl: Schema.Attribute.String;
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

export interface ElementsText extends Struct.ComponentSchema {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.archived-newsletter': BlocksArchivedNewsletter;
      'blocks.content': BlocksContent;
      'blocks.hero-box': BlocksHeroBox;
      'blocks.info-box': BlocksInfoBox;
      'blocks.motto': BlocksMotto;
      'blocks.photo': BlocksPhoto;
      'blocks.service-photo': BlocksServicePhoto;
      'elements.btn': ElementsBtn;
      'elements.text': ElementsText;
    }
  }
}
