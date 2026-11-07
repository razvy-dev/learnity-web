import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_high_impact_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_features_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum_pages_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum_pages_blocks_donate_amounts_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_donate_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_donate_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum_pages_blocks_donate_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum_pages_blocks_present_courses_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_present_courses_modules_items_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_rules_and_values_values_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_blocks_rules_and_values_values_color" AS ENUM('blue', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_about_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_guided_features_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_blocks_guided_features_icon_color" AS ENUM('blue', 'orange', 'lightOrange');
  CREATE TYPE "public"."enum_pages_blocks_guided_features_icon_rotation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_gl_module_labels_module_value" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum_gl_module_labels_color" AS ENUM('blue', 'orange', 'green', 'purple', 'red');
  CREATE TYPE "public"."enum_pages_blocks_faq_categories_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_blocks_faq_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_playground_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_playground_journey_areas_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_playground_journey_areas_color" AS ENUM('customWhite', 'customOrange');
  CREATE TYPE "public"."enum_pages_blocks_guided_examples_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_playground_examples_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_teachers_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_about_story_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_guided_courses_courses_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_guided_courses_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_objectives_objectives_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_blocks_objectives_objectives_color" AS ENUM('blue', 'lightBlue', 'orange', 'lightOrange', 'black', 'white');
  CREATE TYPE "public"."enum_pages_blocks_objectives_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_playground_showcase_tabs_source" AS ENUM('workshops', 'autonomousGroups', 'events', 'courses');
  CREATE TYPE "public"."enum_pages_blocks_playground_showcase_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_spinning_top_elements_color" AS ENUM('customOrange', 'customBlue', 'customLightOrange', 'customLightBlue');
  CREATE TYPE "public"."enum_pages_blocks_spinning_top_elements_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_spinning_top_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_why_support_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_donation_methods_methods_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_blocks_donation_methods_methods_variant" AS ENUM('blue', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_donation_methods_methods_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_donation_methods_corporate_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_donation_methods_corporate_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'donate');
  CREATE TYPE "public"."enum_pages_hero_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_hero_background_color" AS ENUM('lightBlue', 'cream', 'white');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_high_impact_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_features_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum__pages_v_blocks_donate_amounts_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_donate_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_donate_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum__pages_v_blocks_donate_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum__pages_v_blocks_present_courses_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_present_courses_modules_items_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_rules_and_values_values_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_blocks_rules_and_values_values_color" AS ENUM('blue', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_about_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_guided_features_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_blocks_guided_features_icon_color" AS ENUM('blue', 'orange', 'lightOrange');
  CREATE TYPE "public"."enum__pages_v_blocks_guided_features_icon_rotation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__gl_module_labels_v_module_value" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum__gl_module_labels_v_color" AS ENUM('blue', 'orange', 'green', 'purple', 'red');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_categories_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_playground_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_playground_journey_areas_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_playground_journey_areas_color" AS ENUM('customWhite', 'customOrange');
  CREATE TYPE "public"."enum__pages_v_blocks_guided_examples_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_playground_examples_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_teachers_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_about_story_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_guided_courses_courses_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_guided_courses_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_objectives_objectives_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_blocks_objectives_objectives_color" AS ENUM('blue', 'lightBlue', 'orange', 'lightOrange', 'black', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_objectives_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_playground_showcase_tabs_source" AS ENUM('workshops', 'autonomousGroups', 'events', 'courses');
  CREATE TYPE "public"."enum__pages_v_blocks_playground_showcase_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_spinning_top_elements_color" AS ENUM('customOrange', 'customBlue', 'customLightOrange', 'customLightBlue');
  CREATE TYPE "public"."enum__pages_v_blocks_spinning_top_elements_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_spinning_top_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_why_support_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_donation_methods_methods_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_blocks_donation_methods_methods_variant" AS ENUM('blue', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_donation_methods_methods_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_donation_methods_corporate_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_donation_methods_corporate_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'donate');
  CREATE TYPE "public"."enum__pages_v_version_hero_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_version_hero_background_color" AS ENUM('lightBlue', 'cream', 'white');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_guided_workshops_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_guided_workshops_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_guided_workshops_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_guided_workshops_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_guided_workshops_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum_guided_workshops_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum_guided_workshops_module" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum_guided_workshops_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__guided_workshops_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__guided_workshops_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__guided_workshops_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__guided_workshops_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__guided_workshops_v_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum__guided_workshops_v_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum__guided_workshops_v_version_module" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum__guided_workshops_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_guided_courses_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_guided_courses_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_guided_courses_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_guided_courses_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_guided_courses_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum_guided_courses_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum_guided_courses_module" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum_guided_courses_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__guided_courses_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__guided_courses_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__guided_courses_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__guided_courses_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__guided_courses_v_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum__guided_courses_v_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum__guided_courses_v_version_module" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum__guided_courses_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_guided_bootcamps_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_guided_bootcamps_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_guided_bootcamps_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_guided_bootcamps_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_guided_bootcamps_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum_guided_bootcamps_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum_guided_bootcamps_module" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum_guided_bootcamps_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__guided_bootcamps_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__guided_bootcamps_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__guided_bootcamps_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__guided_bootcamps_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__guided_bootcamps_v_blocks_cta_variant" AS ENUM('teal', 'orange', 'dark', 'cream');
  CREATE TYPE "public"."enum__guided_bootcamps_v_blocks_cta_alignment" AS ENUM('center', 'left');
  CREATE TYPE "public"."enum__guided_bootcamps_v_version_module" AS ENUM('module1', 'module2', 'module3');
  CREATE TYPE "public"."enum__guided_bootcamps_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_autonomous_groups_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__autonomous_groups_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_workshops_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__workshops_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_courses_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__courses_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__events_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_what_the_future_details_icon" AS ENUM('calendar', 'clock', 'mapPin', 'users');
  CREATE TYPE "public"."enum_what_the_future_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_what_the_future_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__what_the_future_v_version_details_icon" AS ENUM('calendar', 'clock', 'mapPin', 'users');
  CREATE TYPE "public"."enum__what_the_future_v_version_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__what_the_future_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_camps_features_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum_camps_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_camps_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__camps_v_version_features_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TYPE "public"."enum__camps_v_version_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__camps_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_folders_folder_type" AS ENUM('media');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_socials_platforms_icon" AS ENUM('school', 'graduationCap', 'book', 'bookOpen', 'library', 'calendar', 'clock', 'users', 'sparkles', 'helpCircle', 'lightbulb', 'heart', 'star', 'shield', 'messageCircle', 'messagesSquare', 'award', 'target', 'compass', 'map', 'globe', 'flaskConical', 'atom', 'brain', 'puzzle', 'palette', 'music', 'mic', 'pencil', 'fileText', 'calculator', 'dumbbell', 'leaf', 'rocket', 'briefcase', 'handshake', 'arrowRight', 'play', 'checkCircle', 'home', 'smile', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github', 'twitch', 'slack', 'gitlab', 'figma', 'dribbble', 'codepen', 'codesandbox', 'trello', 'framer', 'pocket', 'atSign', 'share2', 'music2', 'rss');
  CREATE TABLE "pages_hero_high_impact_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_high_impact_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_hero_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_pages_hero_features_icon" DEFAULT 'bookOpen'
  );
  
  CREATE TABLE "pages_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum_pages_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum_pages_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_donate_amounts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"amount" varchar,
  	"link_type" "enum_pages_blocks_donate_amounts_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_donate_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_donate_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_donate" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Susține Educația pentru Viitorul Tinerilor',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Fiecare donație, indiferent de mărime, contribuie la crearea unui viitor mai bun pentru tinerii din România. Alătură-te misiunii noastre de a transforma educația!","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"badge_text" varchar,
  	"trust_text" varchar DEFAULT 'Donațiile sunt deductibile fiscal',
  	"image_id" integer,
  	"variant" "enum_pages_blocks_donate_variant" DEFAULT 'teal',
  	"alignment" "enum_pages_blocks_donate_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_donate_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"De ce avem nevoie de donații? Aici poți scrie povestea din spatele misiunii noastre: contextul, provocările și de ce sprijinul tău contează.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Folosește editorul ca pe o postare: adaugă titluri, paragrafe, citate sau imagini pentru a explica clar de ce donațiile fac diferența în comunitatea noastră.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_present_courses_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_present_courses_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_present_courses_modules_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"teacher" varchar,
  	"place" varchar,
  	"timeperiod" varchar,
  	"icon" "enum_pages_blocks_present_courses_modules_items_icon" DEFAULT 'bookOpen',
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_present_courses_modules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_present_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"section_title" varchar DEFAULT 'Cursurile acestui an',
  	"section_description" jsonb,
  	"cta_text" varchar DEFAULT 'Înscrie-te la cursuri',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Title',
  	"section_description" varchar,
  	"form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"photo_id" integer
  );
  
  CREATE TABLE "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rules_and_values_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"icon" "enum_pages_blocks_rules_and_values_values_icon" DEFAULT 'lightbulb',
  	"color" "enum_pages_blocks_rules_and_values_values_color" DEFAULT 'blue'
  );
  
  CREATE TABLE "pages_blocks_rules_and_values_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb
  );
  
  CREATE TABLE "pages_blocks_rules_and_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Valorile și regulile noastre',
  	"section_description" varchar DEFAULT 'La Learnity, valorile și acordurile noastre comunitare creează o bază pentru învățarea plină de bucurie și creșterea personală. Aceste principii ghidează modul în care învățăm, interacționăm și creștem împreună.',
  	"values_tab_label" varchar DEFAULT 'Valori',
  	"rules_tab_label" varchar DEFAULT 'Regulile comunității',
  	"values_footer_title" varchar DEFAULT 'Valorile noastre în acțiune',
  	"values_footer_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Aceste valori de bază nu sunt doar cuvinte pe o pagină - sunt experiențe trăite la Learnity. În fiecare zi, elevii și profesorii noștri aduc la viață aceste valori prin interacțiunile, proiectele și aventurile lor de învățare. Când vizitați școala noastră, veți vedea curiozitatea care conduce la descoperire, creativitatea care modelează exprimarea, compasiunea care ghidează relațiile, construirea de conexiuni comunitare și curajul care alimentează creșterea.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"rules_footer_text" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Aceste acorduri ne ajută să creăm un mediu de învățare în care toată lumea poate evolua. Atunci când respectăm aceste principii, construim o comunitate bazată pe încredere, respect și bucuria de a învăța.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_about_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_about_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Ce este Learnity?',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Misiunea noastră este să ghidăm fiecare adolescent să devină un adult care se cunoaște pe el însuși, își urmează pasiunile și contribuie la o lume mai bună. Credem că orice schimbare începe din interior – odată ce se descoperă pe sine, poate apoi să creeze un impact real în jurul lui.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Pentru asta, le oferim un spațiu sigur în care să se exploreze fără teama de a fi judecați, să își dezvolte gândirea critică și să capete încredere în cine sunt și în ce pot face.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Learnity este și despre comunitate – despre a întâlni oameni cu aceleași valori și principii, despre conexiuni autentice și sprijin reciproc. Încurajăm adolescenții să fie proactivi, să își exprime ideile și să ia inițiativă atunci când simt că pot face o diferență.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Mai mult decât un loc de învățare, Learnity este un mediu în care adolescenții cresc, își descoperă vocea și găsesc inspirația de a contribui la o lume mai bună. Aici învață să trăiască autentic, cu încredere și curaj, transformând fiecare experiență într-un pas spre un viitor cu impact.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"caption" varchar DEFAULT 'Descoperă povestea Learnity și cum transformăm educația prin joc și creativitate',
  	"video_id" integer,
  	"poster_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_guided_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"icon" "enum_pages_blocks_guided_features_icon" DEFAULT 'bookOpen',
  	"icon_color" "enum_pages_blocks_guided_features_icon_color" DEFAULT 'blue',
  	"icon_rotation" "enum_pages_blocks_guided_features_icon_rotation" DEFAULT 'left'
  );
  
  CREATE TABLE "pages_blocks_guided" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Guided Learning',
  	"section_description" jsonb,
  	"image_id" integer,
  	"cta_text" varchar DEFAULT 'Vezi mai multe',
  	"cta_link" varchar DEFAULT '/guided-learning',
  	"block_name" varchar
  );
  
  CREATE TABLE "gl_module_labels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"module_value" "enum_gl_module_labels_module_value",
  	"label" varchar,
  	"description" varchar,
  	"color" "enum_gl_module_labels_color" DEFAULT 'blue'
  );
  
  CREATE TABLE "pages_blocks_guided_learning_by_year" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Experiențe de învățare ghidate',
  	"section_description" jsonb,
  	"year" numeric DEFAULT 2026,
  	"show_empty_modules" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_categories_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"icon" "enum_pages_blocks_faq_categories_icon" DEFAULT 'school'
  );
  
  CREATE TABLE "pages_blocks_faq_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_faq_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Întrebări și Răspunsuri',
  	"section_title" varchar DEFAULT 'Întrebări Frecvente',
  	"section_description" varchar DEFAULT 'Află răspunsuri la cele mai comune întrebări despre Learnity, metodele noastre de predare și comunitatea noastră.',
  	"search_placeholder" varchar DEFAULT 'Caută întrebări...',
  	"no_results_text" varchar DEFAULT 'Nu am găsit întrebări care să corespundă căutării tale.',
  	"cta_title" varchar DEFAULT 'Nu ai găsit răspunsul căutat?',
  	"cta_description" varchar DEFAULT 'Suntem aici să răspundem la toate întrebările tale. Contactează-ne direct și îți vom răspunde cât mai curând posibil.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_playground_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_playground" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Playground',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Spațiul care oferă adolescenților oportunitatea de a-și lua învățarea în propriile mâini și de a organiza experiențe bazate pe interesele lor (precum grupuri autonome, cursuri, workshop-uri sau evenimente fun), totodată fiind și partea în care se construiește spiritul de comunitate.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"image_id" integer,
  	"badge_text" varchar DEFAULT 'Fun!',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Testimoniale',
  	"auto_advance_interval" numeric DEFAULT 5000,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_journey_areas_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_playground_journey_areas_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_journey_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"color" "enum_pages_blocks_playground_journey_areas_color" DEFAULT 'customWhite',
  	"badge_text" varchar DEFAULT 'Explore',
  	"cta_label" varchar DEFAULT 'Discover'
  );
  
  CREATE TABLE "pages_blocks_playground_journey" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Vino să ne vizitezi',
  	"section_description" varchar DEFAULT 'Suntem localizați central, ușor de găsit și mereu bucuroși să primim vizitatori. Te așteptăm!',
  	"embed_url" varchar DEFAULT 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8272833334277!2d26.12669317670501!3d44.43670500140456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff29423828e1%3A0x3b1df70f8b904c25!2sStrada%20Duzilor%2023%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1746787133637!5m2!1sen!2sro',
  	"map_height" numeric DEFAULT 450,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_guided_examples_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_guided_examples_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_guided_examples" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Câteva dintre workshop-urile Guided',
  	"section_description" varchar DEFAULT 'Workshop-urile ghidate: Pastile de învățare susținute de profesioniști din diferite domenii. Fiecare atelier este practic și creat în funcție de interesele adolescenților.',
  	"badge_text" varchar DEFAULT 'Featured',
  	"card_cta_text" varchar DEFAULT 'Vezi mai multe',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_examples_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_playground_examples_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_examples" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Câteva evenimente din Playground',
  	"section_description" varchar DEFAULT 'În Playground, elevii au oportunitatea de a-și lua învățarea în propriile mâini, fie prin a deveni ei profesori și a susține workshop-uri, fie prin a organiza evenimente alături de alți learniți pentru restul comunității, toate acestea sub ghidajul și îndrumarea noastră.',
  	"card_cta_text" varchar DEFAULT 'Vezi mai multe',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_teachers_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"course" varchar,
  	"image_id" integer,
  	"quote" varchar
  );
  
  CREATE TABLE "pages_blocks_teachers_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_teachers_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Câțiva dintre profesorii noștri',
  	"section_description" varchar DEFAULT 'Profesorii noștri pasionați aduc învățarea la viață cu creativitate, expertiză și o înțelegere profundă a modului în care copiii învață cel mai bine. Fiecare profesor contribuie cu aptitudinile sale unice pentru a crea un mediu captivant și sigur.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_about_story_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_blocks_about_story_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_about_story_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_about_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Povestea noastră',
  	"heading" varchar DEFAULT 'Despre Learnity',
  	"subheading" varchar DEFAULT 'Cum a început?',
  	"story" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"În Universitatea Alternativă, în cadrul ”Incubatorului de Afaceri”, Silvia Chirnogeanu și Paul Crăciun creionează și mai apoi fondează Learnity.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Comunitatea se formează, crește, apar proiecte conexe precum taberele și diverse evenimente cu focus pe educație, atât pentru elevi cât și pentru părinți și cadre didactice.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"founders" varchar DEFAULT 'Silvia Chirnogeanu & Paul Crăciun',
  	"quote" varchar DEFAULT 'Vrem să ne retragem din Learnity - ori îl închidem, ori îl preluați voi.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_camps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"camp_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_guided_courses_courses_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_guided_courses_courses_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_guided_courses_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"teacher" varchar,
  	"description" varchar,
  	"date_interval" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_guided_courses_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_guided_courses_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_guided_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"section_title" varchar DEFAULT 'Câteva dintre cursurile noastre',
  	"section_description" varchar DEFAULT 'Explorați unele dintre cele mai populare cursuri din trimestrele anterioare. Aceste exemple prezintă diversele experiențe de învățare pe care le oferim la Learnity.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_objectives_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"target" varchar,
  	"image_id" integer,
  	"icon" "enum_pages_blocks_objectives_objectives_icon" DEFAULT 'users',
  	"color" "enum_pages_blocks_objectives_objectives_color" DEFAULT 'blue'
  );
  
  CREATE TABLE "pages_blocks_objectives_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_objectives_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"heading" varchar DEFAULT 'Obiectivele noastre pentru 2025',
  	"section_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Cu ajutorul donațiilor tale, putem transforma educația și crea oportunități pentru tinerii din România.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"footer_text" varchar DEFAULT 'Pentru a face toate acestea posibile, avem nevoie de sprijinul comunității. Poți contribui printr-o donație, parteneriate sau promovând inițiativele noastre. Orice ajutor contează!',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_showcase_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"source" "enum_pages_blocks_playground_showcase_tabs_source" DEFAULT 'workshops',
  	"limit" numeric DEFAULT 3
  );
  
  CREATE TABLE "pages_blocks_playground_showcase_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_playground_showcase_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_playground_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"section_title" varchar DEFAULT 'Learning Experiences',
  	"section_description" varchar DEFAULT 'In Playground, elevii au oportunitatea de a-si lua invatarea in propriile maini, fie prin a deveni ei profi si a sustine workshop-uri sau prin a organiza evenimente alaturi de alti learnitasi pentru restul comunitatii, toate acestea sub ghidajul si indrumarea noastra',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_spinning_top_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"color" "enum_pages_blocks_spinning_top_elements_color" DEFAULT 'customOrange',
  	"link_type" "enum_pages_blocks_spinning_top_elements_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_spinning_top_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_spinning_top_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_spinning_top" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Învățarea prin lentila Titirezului',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Metoda titirezului este o definiție metaforică a Învățării Emergente, o busolă pentru a te orienta în timp ce îți proiectezi propria călătorie de învățare, cea a unui grup sau a unei comunități.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Acțiunea, Reflecția și Reziliența descriu toată învățarea în forma sa naturală, iar partea de Design adaugă acesteia o nouă calitate: o face autodeterminată.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Acestea sunt cele patru „puncte cardinale\" ce ne ajută să încetinim mental procesul învățării noastre pentru a ne da seama unde și cum avem nevoie să ne îndreptăm focusul. După ce le-am înțeles pe fiecare individual, pentru a ne păstra procesul activ și eficient, cele patru elemente de bază se amestecă între ele, exact precum culorile unui titirez în rotație.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Așadar, dacă vizualizezi învățarea sub forma unui titirez, scopul este să-i echilibrezi toate cele patru puncte pentru a-l ține în mișcare.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"enable_animation" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_what_the_future" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_support_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_why_support_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_why_support_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_why_support" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"heading" varchar DEFAULT 'De ce să susții educația?',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"În ultima vreme, fiecare discuție despre situația social-economică și politică din România și din lume pare să se încheie cu aceeași concluzie:","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"„Totul pleacă de la educație.\"","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Dacă ne-am cunoaște mai bine istoria, poate nu am repeta-o, crezând orbește că extremismul este soluția radicală de care avem nevoie.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Dacă am învăța să gândim critic, în loc să memorăm mecanic orice informație ni se livrează, poate nu am cădea atât de ușor pradă manipulării și dezinformării.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Dacă ne-ar fi cultivată încrederea în noi înșine, creativitatea și unicitatea, în loc să fim forțați să ne încadrăm în standarde rigide, poate am înțelege că schimbarea depinde de noi.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Și, chiar dacă poate suna clișeic, generația aceasta este viitorul. Așadar, dacă nu investim în ea, atunci în ce?","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"image_id" integer,
  	"quote_text" varchar DEFAULT '"Educația este cea mai puternică armă pe care o puteți folosi pentru a schimba lumea."',
  	"quote_author" varchar DEFAULT 'Nelson Mandela',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_donation_methods_methods_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_donation_methods_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_blocks_donation_methods_methods_icon" DEFAULT 'handshake',
  	"image_id" integer,
  	"variant" "enum_pages_blocks_donation_methods_methods_variant" DEFAULT 'blue',
  	"link_type" "enum_pages_blocks_donation_methods_methods_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_donation_methods_corporate_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_donation_methods_corporate_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_donation_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Susține Learnity',
  	"heading" varchar DEFAULT 'Modalități de Donație',
  	"section_description" varchar DEFAULT 'Alege metoda preferată pentru a susține misiunea noastră de a transforma educația și a crea oportunități pentru tineri.',
  	"corporate_icon" "enum_pages_blocks_donation_methods_corporate_icon" DEFAULT 'shield',
  	"corporate_title" varchar DEFAULT 'Donații Corporative și Parteneriate',
  	"corporate_description" varchar DEFAULT 'Companiile pot deveni parteneri în misiunea noastră de a transforma educația. Oferim diverse pachete de sponsorizare și posibilitatea de a personaliza implicarea în funcție de valorile și obiectivele companiei tale.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_title" varchar DEFAULT 'Learnity',
  	"hero_subtitle" varchar DEFAULT 'Learnity: o comunitate democratică de învățare alternativă pentru adolescenți, locul în care aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care trăiesc.',
  	"hero_contact_heading" varchar DEFAULT 'Contactează-ne',
  	"hero_heading" varchar DEFAULT 'Guided Learning',
  	"hero_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Partea din Learnity care oferă experiențe de învățare precum cursuri și workshop-uri susținute de profesioniști. Acestea diferă de educația formală prin modul de predare cât mai practic și atractiv, lipsa temelor obligatorii sau activităților impuse și relația de egalitate dintre profesori și elevi.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"hero_image_id" integer,
  	"hero_floating_image_id" integer,
  	"hero_badge_text" varchar,
  	"hero_image_position" "enum_pages_hero_image_position" DEFAULT 'left',
  	"hero_background_color" "enum_pages_hero_background_color" DEFAULT 'lightBlue',
  	"hero_show_decorations" boolean DEFAULT true,
  	"hero_floating_text" varchar DEFAULT 'Împreună facem diferența!',
  	"hero_goal_label" varchar DEFAULT 'Obiectiv 2025 · 100 de tineri',
  	"hero_goal_progress" numeric DEFAULT 45,
  	"hero_wave_divider" boolean DEFAULT true,
  	"hero_rich_text" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"guided_workshops_id" integer,
  	"events_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_high_impact_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_high_impact_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum__pages_v_version_hero_features_icon" DEFAULT 'bookOpen',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum__pages_v_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum__pages_v_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donate_amounts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"amount" varchar,
  	"link_type" "enum__pages_v_blocks_donate_amounts_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donate_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_donate_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donate" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Susține Educația pentru Viitorul Tinerilor',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Fiecare donație, indiferent de mărime, contribuie la crearea unui viitor mai bun pentru tinerii din România. Alătură-te misiunii noastre de a transforma educația!","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"badge_text" varchar,
  	"trust_text" varchar DEFAULT 'Donațiile sunt deductibile fiscal',
  	"image_id" integer,
  	"variant" "enum__pages_v_blocks_donate_variant" DEFAULT 'teal',
  	"alignment" "enum__pages_v_blocks_donate_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donate_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"De ce avem nevoie de donații? Aici poți scrie povestea din spatele misiunii noastre: contextul, provocările și de ce sprijinul tău contează.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Folosește editorul ca pe o postare: adaugă titluri, paragrafe, citate sau imagini pentru a explica clar de ce donațiile fac diferența în comunitatea noastră.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_present_courses_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_present_courses_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_present_courses_modules_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"teacher" varchar,
  	"place" varchar,
  	"timeperiod" varchar,
  	"icon" "enum__pages_v_blocks_present_courses_modules_items_icon" DEFAULT 'bookOpen',
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_present_courses_modules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_present_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"section_title" varchar DEFAULT 'Cursurile acestui an',
  	"section_description" jsonb,
  	"cta_text" varchar DEFAULT 'Înscrie-te la cursuri',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Title',
  	"section_description" varchar,
  	"form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rules_and_values_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"icon" "enum__pages_v_blocks_rules_and_values_values_icon" DEFAULT 'lightbulb',
  	"color" "enum__pages_v_blocks_rules_and_values_values_color" DEFAULT 'blue',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rules_and_values_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rules_and_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Valorile și regulile noastre',
  	"section_description" varchar DEFAULT 'La Learnity, valorile și acordurile noastre comunitare creează o bază pentru învățarea plină de bucurie și creșterea personală. Aceste principii ghidează modul în care învățăm, interacționăm și creștem împreună.',
  	"values_tab_label" varchar DEFAULT 'Valori',
  	"rules_tab_label" varchar DEFAULT 'Regulile comunității',
  	"values_footer_title" varchar DEFAULT 'Valorile noastre în acțiune',
  	"values_footer_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Aceste valori de bază nu sunt doar cuvinte pe o pagină - sunt experiențe trăite la Learnity. În fiecare zi, elevii și profesorii noștri aduc la viață aceste valori prin interacțiunile, proiectele și aventurile lor de învățare. Când vizitați școala noastră, veți vedea curiozitatea care conduce la descoperire, creativitatea care modelează exprimarea, compasiunea care ghidează relațiile, construirea de conexiuni comunitare și curajul care alimentează creșterea.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"rules_footer_text" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Aceste acorduri ne ajută să creăm un mediu de învățare în care toată lumea poate evolua. Atunci când respectăm aceste principii, construim o comunitate bazată pe încredere, respect și bucuria de a învăța.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_about_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Ce este Learnity?',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Misiunea noastră este să ghidăm fiecare adolescent să devină un adult care se cunoaște pe el însuși, își urmează pasiunile și contribuie la o lume mai bună. Credem că orice schimbare începe din interior – odată ce se descoperă pe sine, poate apoi să creeze un impact real în jurul lui.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Pentru asta, le oferim un spațiu sigur în care să se exploreze fără teama de a fi judecați, să își dezvolte gândirea critică și să capete încredere în cine sunt și în ce pot face.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Learnity este și despre comunitate – despre a întâlni oameni cu aceleași valori și principii, despre conexiuni autentice și sprijin reciproc. Încurajăm adolescenții să fie proactivi, să își exprime ideile și să ia inițiativă atunci când simt că pot face o diferență.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Mai mult decât un loc de învățare, Learnity este un mediu în care adolescenții cresc, își descoperă vocea și găsesc inspirația de a contribui la o lume mai bună. Aici învață să trăiască autentic, cu încredere și curaj, transformând fiecare experiență într-un pas spre un viitor cu impact.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"caption" varchar DEFAULT 'Descoperă povestea Learnity și cum transformăm educația prin joc și creativitate',
  	"video_id" integer,
  	"poster_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"icon" "enum__pages_v_blocks_guided_features_icon" DEFAULT 'bookOpen',
  	"icon_color" "enum__pages_v_blocks_guided_features_icon_color" DEFAULT 'blue',
  	"icon_rotation" "enum__pages_v_blocks_guided_features_icon_rotation" DEFAULT 'left',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Guided Learning',
  	"section_description" jsonb,
  	"image_id" integer,
  	"cta_text" varchar DEFAULT 'Vezi mai multe',
  	"cta_link" varchar DEFAULT '/guided-learning',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_gl_module_labels_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"module_value" "enum__gl_module_labels_v_module_value",
  	"label" varchar,
  	"description" varchar,
  	"color" "enum__gl_module_labels_v_color" DEFAULT 'blue',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_learning_by_year" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Experiențe de învățare ghidate',
  	"section_description" jsonb,
  	"year" numeric DEFAULT 2026,
  	"show_empty_modules" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_categories_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"icon" "enum__pages_v_blocks_faq_categories_icon" DEFAULT 'school',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_faq_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Întrebări și Răspunsuri',
  	"section_title" varchar DEFAULT 'Întrebări Frecvente',
  	"section_description" varchar DEFAULT 'Află răspunsuri la cele mai comune întrebări despre Learnity, metodele noastre de predare și comunitatea noastră.',
  	"search_placeholder" varchar DEFAULT 'Caută întrebări...',
  	"no_results_text" varchar DEFAULT 'Nu am găsit întrebări care să corespundă căutării tale.',
  	"cta_title" varchar DEFAULT 'Nu ai găsit răspunsul căutat?',
  	"cta_description" varchar DEFAULT 'Suntem aici să răspundem la toate întrebările tale. Contactează-ne direct și îți vom răspunde cât mai curând posibil.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_playground_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Playground',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Spațiul care oferă adolescenților oportunitatea de a-și lua învățarea în propriile mâini și de a organiza experiențe bazate pe interesele lor (precum grupuri autonome, cursuri, workshop-uri sau evenimente fun), totodată fiind și partea în care se construiește spiritul de comunitate.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"image_id" integer,
  	"badge_text" varchar DEFAULT 'Fun!',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Testimoniale',
  	"auto_advance_interval" numeric DEFAULT 5000,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_journey_areas_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_playground_journey_areas_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_journey_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"color" "enum__pages_v_blocks_playground_journey_areas_color" DEFAULT 'customWhite',
  	"badge_text" varchar DEFAULT 'Explore',
  	"cta_label" varchar DEFAULT 'Discover',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_journey" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Vino să ne vizitezi',
  	"section_description" varchar DEFAULT 'Suntem localizați central, ușor de găsit și mereu bucuroși să primim vizitatori. Te așteptăm!',
  	"embed_url" varchar DEFAULT 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8272833334277!2d26.12669317670501!3d44.43670500140456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff29423828e1%3A0x3b1df70f8b904c25!2sStrada%20Duzilor%2023%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1746787133637!5m2!1sen!2sro',
  	"map_height" numeric DEFAULT 450,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_examples_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_guided_examples_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_examples" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Câteva dintre workshop-urile Guided',
  	"section_description" varchar DEFAULT 'Workshop-urile ghidate: Pastile de învățare susținute de profesioniști din diferite domenii. Fiecare atelier este practic și creat în funcție de interesele adolescenților.',
  	"badge_text" varchar DEFAULT 'Featured',
  	"card_cta_text" varchar DEFAULT 'Vezi mai multe',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_examples_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_playground_examples_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_examples" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Câteva evenimente din Playground',
  	"section_description" varchar DEFAULT 'În Playground, elevii au oportunitatea de a-și lua învățarea în propriile mâini, fie prin a deveni ei profesori și a susține workshop-uri, fie prin a organiza evenimente alături de alți learniți pentru restul comunității, toate acestea sub ghidajul și îndrumarea noastră.',
  	"card_cta_text" varchar DEFAULT 'Vezi mai multe',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_teachers_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"course" varchar,
  	"image_id" integer,
  	"quote" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_teachers_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_teachers_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Câțiva dintre profesorii noștri',
  	"section_description" varchar DEFAULT 'Profesorii noștri pasionați aduc învățarea la viață cu creativitate, expertiză și o înțelegere profundă a modului în care copiii învață cel mai bine. Fiecare profesor contribuie cu aptitudinile sale unice pentru a crea un mediu captivant și sigur.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_story_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_story_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_about_story_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Povestea noastră',
  	"heading" varchar DEFAULT 'Despre Learnity',
  	"subheading" varchar DEFAULT 'Cum a început?',
  	"story" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"În Universitatea Alternativă, în cadrul ”Incubatorului de Afaceri”, Silvia Chirnogeanu și Paul Crăciun creionează și mai apoi fondează Learnity.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Comunitatea se formează, crește, apar proiecte conexe precum taberele și diverse evenimente cu focus pe educație, atât pentru elevi cât și pentru părinți și cadre didactice.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"founders" varchar DEFAULT 'Silvia Chirnogeanu & Paul Crăciun',
  	"quote" varchar DEFAULT 'Vrem să ne retragem din Learnity - ori îl închidem, ori îl preluați voi.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_camps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"camp_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_courses_courses_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_guided_courses_courses_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_courses_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"teacher" varchar,
  	"description" varchar,
  	"date_interval" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_courses_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_guided_courses_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_guided_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"section_title" varchar DEFAULT 'Câteva dintre cursurile noastre',
  	"section_description" varchar DEFAULT 'Explorați unele dintre cele mai populare cursuri din trimestrele anterioare. Aceste exemple prezintă diversele experiențe de învățare pe care le oferim la Learnity.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_objectives_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"target" varchar,
  	"image_id" integer,
  	"icon" "enum__pages_v_blocks_objectives_objectives_icon" DEFAULT 'users',
  	"color" "enum__pages_v_blocks_objectives_objectives_color" DEFAULT 'blue',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_objectives_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_objectives_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"heading" varchar DEFAULT 'Obiectivele noastre pentru 2025',
  	"section_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Cu ajutorul donațiilor tale, putem transforma educația și crea oportunități pentru tinerii din România.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"footer_text" varchar DEFAULT 'Pentru a face toate acestea posibile, avem nevoie de sprijinul comunității. Poți contribui printr-o donație, parteneriate sau promovând inițiativele noastre. Orice ajutor contează!',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_showcase_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"source" "enum__pages_v_blocks_playground_showcase_tabs_source" DEFAULT 'workshops',
  	"limit" numeric DEFAULT 3,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_showcase_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_playground_showcase_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_playground_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"section_title" varchar DEFAULT 'Learning Experiences',
  	"section_description" varchar DEFAULT 'In Playground, elevii au oportunitatea de a-si lua invatarea in propriile maini, fie prin a deveni ei profi si a sustine workshop-uri sau prin a organiza evenimente alaturi de alti learnitasi pentru restul comunitatii, toate acestea sub ghidajul si indrumarea noastra',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spinning_top_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"color" "enum__pages_v_blocks_spinning_top_elements_color" DEFAULT 'customOrange',
  	"link_type" "enum__pages_v_blocks_spinning_top_elements_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spinning_top_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_spinning_top_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spinning_top" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Învățarea prin lentila Titirezului',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Metoda titirezului este o definiție metaforică a Învățării Emergente, o busolă pentru a te orienta în timp ce îți proiectezi propria călătorie de învățare, cea a unui grup sau a unei comunități.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Acțiunea, Reflecția și Reziliența descriu toată învățarea în forma sa naturală, iar partea de Design adaugă acesteia o nouă calitate: o face autodeterminată.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Acestea sunt cele patru „puncte cardinale\" ce ne ajută să încetinim mental procesul învățării noastre pentru a ne da seama unde și cum avem nevoie să ne îndreptăm focusul. După ce le-am înțeles pe fiecare individual, pentru a ne păstra procesul activ și eficient, cele patru elemente de bază se amestecă între ele, exact precum culorile unui titirez în rotație.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Așadar, dacă vizualizezi învățarea sub forma unui titirez, scopul este să-i echilibrezi toate cele patru puncte pentru a-l ține în mișcare.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"enable_animation" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_what_the_future" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"document_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_support_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_support_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_why_support_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_support" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"heading" varchar DEFAULT 'De ce să susții educația?',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"În ultima vreme, fiecare discuție despre situația social-economică și politică din România și din lume pare să se încheie cu aceeași concluzie:","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"„Totul pleacă de la educație.\"","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Dacă ne-am cunoaște mai bine istoria, poate nu am repeta-o, crezând orbește că extremismul este soluția radicală de care avem nevoie.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Dacă am învăța să gândim critic, în loc să memorăm mecanic orice informație ni se livrează, poate nu am cădea atât de ușor pradă manipulării și dezinformării.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Dacă ne-ar fi cultivată încrederea în noi înșine, creativitatea și unicitatea, în loc să fim forțați să ne încadrăm în standarde rigide, poate am înțelege că schimbarea depinde de noi.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Și, chiar dacă poate suna clișeic, generația aceasta este viitorul. Așadar, dacă nu investim în ea, atunci în ce?","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"image_id" integer,
  	"quote_text" varchar DEFAULT '"Educația este cea mai puternică armă pe care o puteți folosi pentru a schimba lumea."',
  	"quote_author" varchar DEFAULT 'Nelson Mandela',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donation_methods_methods_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donation_methods_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_blocks_donation_methods_methods_icon" DEFAULT 'handshake',
  	"image_id" integer,
  	"variant" "enum__pages_v_blocks_donation_methods_methods_variant" DEFAULT 'blue',
  	"link_type" "enum__pages_v_blocks_donation_methods_methods_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donation_methods_corporate_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_donation_methods_corporate_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_donation_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Susține Learnity',
  	"heading" varchar DEFAULT 'Modalități de Donație',
  	"section_description" varchar DEFAULT 'Alege metoda preferată pentru a susține misiunea noastră de a transforma educația și a crea oportunități pentru tineri.',
  	"corporate_icon" "enum__pages_v_blocks_donation_methods_corporate_icon" DEFAULT 'shield',
  	"corporate_title" varchar DEFAULT 'Donații Corporative și Parteneriate',
  	"corporate_description" varchar DEFAULT 'Companiile pot deveni parteneri în misiunea noastră de a transforma educația. Oferim diverse pachete de sponsorizare și posibilitatea de a personaliza implicarea în funcție de valorile și obiectivele companiei tale.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_hero_title" varchar DEFAULT 'Learnity',
  	"version_hero_subtitle" varchar DEFAULT 'Learnity: o comunitate democratică de învățare alternativă pentru adolescenți, locul în care aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care trăiesc.',
  	"version_hero_contact_heading" varchar DEFAULT 'Contactează-ne',
  	"version_hero_heading" varchar DEFAULT 'Guided Learning',
  	"version_hero_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Partea din Learnity care oferă experiențe de învățare precum cursuri și workshop-uri susținute de profesioniști. Acestea diferă de educația formală prin modul de predare cât mai practic și atractiv, lipsa temelor obligatorii sau activităților impuse și relația de egalitate dintre profesori și elevi.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"version_hero_image_id" integer,
  	"version_hero_floating_image_id" integer,
  	"version_hero_badge_text" varchar,
  	"version_hero_image_position" "enum__pages_v_version_hero_image_position" DEFAULT 'left',
  	"version_hero_background_color" "enum__pages_v_version_hero_background_color" DEFAULT 'lightBlue',
  	"version_hero_show_decorations" boolean DEFAULT true,
  	"version_hero_floating_text" varchar DEFAULT 'Împreună facem diferența!',
  	"version_hero_goal_label" varchar DEFAULT 'Obiectiv 2025 · 100 de tineri',
  	"version_hero_goal_progress" numeric DEFAULT 45,
  	"version_hero_wave_divider" boolean DEFAULT true,
  	"version_hero_rich_text" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"guided_workshops_id" integer,
  	"events_id" integer
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "guided_workshops_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"teacher" varchar
  );
  
  CREATE TABLE "guided_workshops_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_guided_workshops_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_guided_workshops_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_guided_workshops_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "guided_workshops_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_workshops_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_workshops_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_guided_workshops_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "guided_workshops_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum_guided_workshops_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum_guided_workshops_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_workshops_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_workshops" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"date" timestamp(3) with time zone,
  	"module" "enum_guided_workshops_module" DEFAULT 'module1',
  	"custom_form_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_guided_workshops_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "guided_workshops_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_guided_workshops_v_version_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"teacher" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_workshops_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__guided_workshops_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__guided_workshops_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__guided_workshops_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_workshops_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_workshops_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_workshops_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__guided_workshops_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_workshops_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum__guided_workshops_v_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum__guided_workshops_v_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_workshops_v_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_workshops_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_module" "enum__guided_workshops_v_version_module" DEFAULT 'module1',
  	"version_custom_form_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__guided_workshops_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_guided_workshops_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "guided_courses_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"teacher" varchar
  );
  
  CREATE TABLE "guided_courses_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_guided_courses_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_guided_courses_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_guided_courses_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "guided_courses_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_courses_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_courses_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_guided_courses_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "guided_courses_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum_guided_courses_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum_guided_courses_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_courses_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"module" "enum_guided_courses_module" DEFAULT 'module1',
  	"custom_form_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_guided_courses_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "guided_courses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_guided_courses_v_version_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"teacher" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_courses_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__guided_courses_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__guided_courses_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__guided_courses_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_courses_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_courses_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_courses_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__guided_courses_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_courses_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum__guided_courses_v_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum__guided_courses_v_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_courses_v_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_courses_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_start_date" timestamp(3) with time zone,
  	"version_end_date" timestamp(3) with time zone,
  	"version_module" "enum__guided_courses_v_version_module" DEFAULT 'module1',
  	"version_custom_form_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__guided_courses_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_guided_courses_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "guided_bootcamps_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"teacher" varchar
  );
  
  CREATE TABLE "guided_bootcamps_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_guided_bootcamps_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_guided_bootcamps_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_guided_bootcamps_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "guided_bootcamps_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_bootcamps_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_bootcamps_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_guided_bootcamps_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "guided_bootcamps_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum_guided_bootcamps_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum_guided_bootcamps_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_bootcamps_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "guided_bootcamps" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"location" varchar,
  	"module" "enum_guided_bootcamps_module" DEFAULT 'module1',
  	"custom_form_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_guided_bootcamps_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "guided_bootcamps_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_guided_bootcamps_v_version_teachers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"teacher" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__guided_bootcamps_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__guided_bootcamps_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__guided_bootcamps_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__guided_bootcamps_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Hai să facem parte din Learnity',
  	"rich_text" jsonb,
  	"badge_text" varchar,
  	"image_id" integer,
  	"variant" "enum__guided_bootcamps_v_blocks_cta_variant" DEFAULT 'teal',
  	"alignment" "enum__guided_bootcamps_v_blocks_cta_alignment" DEFAULT 'center',
  	"show_decorations" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v_blocks_teacher" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guided_bootcamps_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_start_date" timestamp(3) with time zone,
  	"version_end_date" timestamp(3) with time zone,
  	"version_location" varchar,
  	"version_module" "enum__guided_bootcamps_v_version_module" DEFAULT 'module1',
  	"version_custom_form_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__guided_bootcamps_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_guided_bootcamps_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "autonomous_groups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"date" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_autonomous_groups_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "autonomous_groups_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_autonomous_groups_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__autonomous_groups_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_autonomous_groups_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "workshops" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"date" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_workshops_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "workshops_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_workshops_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__workshops_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_workshops_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_courses_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "courses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_courses_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_start_date" timestamp(3) with time zone,
  	"version_end_date" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__courses_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_courses_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" jsonb,
  	"photo_id" integer,
  	"date" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_events_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_events_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" jsonb,
  	"version_photo_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__events_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_events_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "what_the_future_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_what_the_future_details_icon" DEFAULT 'calendar',
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "what_the_future_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "what_the_future_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_what_the_future_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "what_the_future" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar,
  	"heading" varchar DEFAULT 'What The Future',
  	"subtitle" varchar DEFAULT 'Un eveniment despre carieră, vocație și viitor',
  	"description" jsonb,
  	"long_description" jsonb,
  	"about_heading" varchar DEFAULT 'Despre eveniment',
  	"image1_id" integer,
  	"image2_id" integer,
  	"previous_image_label" varchar DEFAULT 'Imaginea anterioară',
  	"next_image_label" varchar DEFAULT 'Imaginea următoare',
  	"details_heading" varchar DEFAULT 'Detalii eveniment',
  	"features_heading" varchar DEFAULT 'Ce vei experimenta',
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_what_the_future_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "what_the_future_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "_what_the_future_v_version_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__what_the_future_v_version_details_icon" DEFAULT 'calendar',
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_what_the_future_v_version_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_what_the_future_v_version_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__what_the_future_v_version_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_what_the_future_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_badge_text" varchar,
  	"version_heading" varchar DEFAULT 'What The Future',
  	"version_subtitle" varchar DEFAULT 'Un eveniment despre carieră, vocație și viitor',
  	"version_description" jsonb,
  	"version_long_description" jsonb,
  	"version_about_heading" varchar DEFAULT 'Despre eveniment',
  	"version_image1_id" integer,
  	"version_image2_id" integer,
  	"version_previous_image_label" varchar DEFAULT 'Imaginea anterioară',
  	"version_next_image_label" varchar DEFAULT 'Imaginea următoare',
  	"version_details_heading" varchar DEFAULT 'Detalii eveniment',
  	"version_features_heading" varchar DEFAULT 'Ce vei experimenta',
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__what_the_future_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_what_the_future_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "camps_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_camps_features_icon" DEFAULT 'star'
  );
  
  CREATE TABLE "camps_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_camps_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "camps" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_text" varchar DEFAULT 'Dare Yourself',
  	"heading" varchar DEFAULT 'Tabăra de Vară',
  	"section_subtitle" varchar DEFAULT 'O experiență de neuitat în inima naturii',
  	"title" varchar DEFAULT 'Dare Yourself',
  	"title_subtitle" varchar DEFAULT 'Tabăra Learnity care îți activează curajul și vocea interioară',
  	"description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Vara asta, Learnity te provoacă să te descoperi cu adevărat. Dare Yourself este o tabără de dezvoltare personală pentru liceeni curajoși, dornici să-și descopere vocea, să-și înțeleagă emoțiile și să devină schimbarea pe care o vor în lume.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Timp de o săptămână, vei fi înconjurat de oameni ca tine – care caută sens, autenticitate și conexiune. Vei explora ce înseamnă să te înțelegi pe tine, să relaționezi sănătos cu ceilalți, să îți depășești fricile și să te implici în ceea ce contează cu adevărat.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Este o tabără care îmbină jocul, introspecția, provocările și comunitatea, într-un proces ghidat de o echipă de psihologi cu experiență.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"age" varchar DEFAULT '14-18 ani',
  	"dates" varchar DEFAULT '17-23 August 2025',
  	"dates_note" varchar DEFAULT '7 zile / 6 nopți',
  	"location" varchar DEFAULT 'Predeluț, Bran',
  	"location_note" varchar DEFAULT 'Locație premium',
  	"price" varchar DEFAULT '2100 RON',
  	"price_note" varchar DEFAULT 'Preț',
  	"features_title" varchar DEFAULT 'Ce include tabăra:',
  	"image_id" integer,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_camps_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "camps_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "_camps_v_version_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__camps_v_version_features_icon" DEFAULT 'star',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_camps_v_version_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__camps_v_version_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_camps_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_badge_text" varchar DEFAULT 'Dare Yourself',
  	"version_heading" varchar DEFAULT 'Tabăra de Vară',
  	"version_section_subtitle" varchar DEFAULT 'O experiență de neuitat în inima naturii',
  	"version_title" varchar DEFAULT 'Dare Yourself',
  	"version_title_subtitle" varchar DEFAULT 'Tabăra Learnity care îți activează curajul și vocea interioară',
  	"version_description" jsonb DEFAULT '{"root":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Vara asta, Learnity te provoacă să te descoperi cu adevărat. Dare Yourself este o tabără de dezvoltare personală pentru liceeni curajoși, dornici să-și descopere vocea, să-și înțeleagă emoțiile și să devină schimbarea pe care o vor în lume.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Timp de o săptămână, vei fi înconjurat de oameni ca tine – care caută sens, autenticitate și conexiune. Vei explora ce înseamnă să te înțelegi pe tine, să relaționezi sănătos cu ceilalți, să îți depășești fricile și să te implici în ceea ce contează cu adevărat.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1},{"type":"paragraph","children":[{"type":"text","detail":0,"format":0,"mode":"normal","style":"","text":"Este o tabără care îmbină jocul, introspecția, provocările și comunitatea, într-un proces ghidat de o echipă de psihologi cu experiență.","version":1}],"direction":"ltr","format":"","indent":0,"textFormat":0,"textStyle":"","version":1}],"direction":"ltr","format":"","indent":0,"version":1}}'::jsonb,
  	"version_age" varchar DEFAULT '14-18 ani',
  	"version_dates" varchar DEFAULT '17-23 August 2025',
  	"version_dates_note" varchar DEFAULT '7 zile / 6 nopți',
  	"version_location" varchar DEFAULT 'Predeluț, Bran',
  	"version_location_note" varchar DEFAULT 'Locație premium',
  	"version_price" varchar DEFAULT '2100 RON',
  	"version_price_note" varchar DEFAULT 'Preț',
  	"version_features_title" varchar DEFAULT 'Ce include tabăra:',
  	"version_image_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__camps_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_camps_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "forms_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guided_workshops_id" integer,
  	"guided_courses_id" integer,
  	"guided_bootcamps_id" integer
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guided_workshops_id" integer,
  	"guided_courses_id" integer,
  	"guided_bootcamps_id" integer
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"category_i_d" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_mcp_api_keys" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" integer NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"posts_find" boolean DEFAULT false,
  	"posts_create" boolean DEFAULT false,
  	"posts_update" boolean DEFAULT false,
  	"posts_delete" boolean DEFAULT false,
  	"pages_find" boolean DEFAULT false,
  	"pages_create" boolean DEFAULT false,
  	"pages_update" boolean DEFAULT false,
  	"pages_delete" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"enable_a_p_i_key" boolean,
  	"api_key" varchar,
  	"api_key_index" varchar
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_folders_folder_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_payload_folders_folder_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "payload_folders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"guided_workshops_id" integer,
  	"guided_courses_id" integer,
  	"guided_bootcamps_id" integer,
  	"autonomous_groups_id" integer,
  	"workshops_id" integer,
  	"courses_id" integer,
  	"events_id" integer,
  	"what_the_future_id" integer,
  	"camps_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_mcp_api_keys_id" integer,
  	"payload_folders_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"payload_mcp_api_keys_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"description" varchar NOT NULL,
  	"copyright" varchar DEFAULT '© 2026 Learnity. Toate drepturile rezervate.' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "socials_platforms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_socials_platforms_icon" DEFAULT 'school' NOT NULL,
  	"name" varchar NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE "socials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_address" varchar NOT NULL,
  	"contact_email" varchar NOT NULL,
  	"contact_phone" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_hero_high_impact_links" ADD CONSTRAINT "pages_hero_high_impact_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_features" ADD CONSTRAINT "pages_hero_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_stats" ADD CONSTRAINT "pages_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donate_amounts" ADD CONSTRAINT "pages_blocks_donate_amounts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_donate"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donate_links" ADD CONSTRAINT "pages_blocks_donate_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_donate"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donate" ADD CONSTRAINT "pages_blocks_donate_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_donate" ADD CONSTRAINT "pages_blocks_donate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donate_story" ADD CONSTRAINT "pages_blocks_donate_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_present_courses_links" ADD CONSTRAINT "pages_blocks_present_courses_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_present_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_present_courses_modules_items" ADD CONSTRAINT "pages_blocks_present_courses_modules_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_present_courses_modules_items" ADD CONSTRAINT "pages_blocks_present_courses_modules_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_present_courses_modules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_present_courses_modules" ADD CONSTRAINT "pages_blocks_present_courses_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_present_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_present_courses" ADD CONSTRAINT "pages_blocks_present_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items" ADD CONSTRAINT "pages_blocks_timeline_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items" ADD CONSTRAINT "pages_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rules_and_values_values" ADD CONSTRAINT "pages_blocks_rules_and_values_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rules_and_values"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rules_and_values_rules" ADD CONSTRAINT "pages_blocks_rules_and_values_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rules_and_values"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rules_and_values" ADD CONSTRAINT "pages_blocks_rules_and_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_links" ADD CONSTRAINT "pages_blocks_about_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_features" ADD CONSTRAINT "pages_blocks_guided_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_guided"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided" ADD CONSTRAINT "pages_blocks_guided_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided" ADD CONSTRAINT "pages_blocks_guided_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gl_module_labels" ADD CONSTRAINT "gl_module_labels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_guided_learning_by_year"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_learning_by_year" ADD CONSTRAINT "pages_blocks_guided_learning_by_year_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_categories_questions" ADD CONSTRAINT "pages_blocks_faq_categories_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_categories" ADD CONSTRAINT "pages_blocks_faq_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_links" ADD CONSTRAINT "pages_blocks_faq_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_links" ADD CONSTRAINT "pages_blocks_playground_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_playground"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground" ADD CONSTRAINT "pages_blocks_playground_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground" ADD CONSTRAINT "pages_blocks_playground_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_journey_areas_links" ADD CONSTRAINT "pages_blocks_playground_journey_areas_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_playground_journey_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_journey_areas" ADD CONSTRAINT "pages_blocks_playground_journey_areas_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_journey_areas" ADD CONSTRAINT "pages_blocks_playground_journey_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_playground_journey"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_journey" ADD CONSTRAINT "pages_blocks_playground_journey_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_map" ADD CONSTRAINT "pages_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_examples_links" ADD CONSTRAINT "pages_blocks_guided_examples_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_guided_examples"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_examples" ADD CONSTRAINT "pages_blocks_guided_examples_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_examples_links" ADD CONSTRAINT "pages_blocks_playground_examples_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_playground_examples"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_examples" ADD CONSTRAINT "pages_blocks_playground_examples_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_teachers_teachers" ADD CONSTRAINT "pages_blocks_teachers_teachers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_teachers_teachers" ADD CONSTRAINT "pages_blocks_teachers_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_teachers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_teachers_links" ADD CONSTRAINT "pages_blocks_teachers_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_teachers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_teachers" ADD CONSTRAINT "pages_blocks_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_teacher" ADD CONSTRAINT "pages_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_teacher" ADD CONSTRAINT "pages_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_story_images" ADD CONSTRAINT "pages_blocks_about_story_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_story_images" ADD CONSTRAINT "pages_blocks_about_story_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_story_links" ADD CONSTRAINT "pages_blocks_about_story_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_story" ADD CONSTRAINT "pages_blocks_about_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_camps" ADD CONSTRAINT "pages_blocks_camps_camp_id_camps_id_fk" FOREIGN KEY ("camp_id") REFERENCES "public"."camps"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_camps" ADD CONSTRAINT "pages_blocks_camps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_courses_courses_links" ADD CONSTRAINT "pages_blocks_guided_courses_courses_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_guided_courses_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_courses_courses" ADD CONSTRAINT "pages_blocks_guided_courses_courses_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_courses_courses" ADD CONSTRAINT "pages_blocks_guided_courses_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_courses_links" ADD CONSTRAINT "pages_blocks_guided_courses_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_guided_courses" ADD CONSTRAINT "pages_blocks_guided_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_objectives_objectives" ADD CONSTRAINT "pages_blocks_objectives_objectives_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_objectives_objectives" ADD CONSTRAINT "pages_blocks_objectives_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_objectives"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_objectives_links" ADD CONSTRAINT "pages_blocks_objectives_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_objectives"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_objectives" ADD CONSTRAINT "pages_blocks_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_showcase_tabs" ADD CONSTRAINT "pages_blocks_playground_showcase_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_playground_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_showcase_links" ADD CONSTRAINT "pages_blocks_playground_showcase_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_playground_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_playground_showcase" ADD CONSTRAINT "pages_blocks_playground_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_spinning_top_elements" ADD CONSTRAINT "pages_blocks_spinning_top_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_spinning_top"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_spinning_top_links" ADD CONSTRAINT "pages_blocks_spinning_top_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_spinning_top"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_spinning_top" ADD CONSTRAINT "pages_blocks_spinning_top_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_what_the_future" ADD CONSTRAINT "pages_blocks_what_the_future_document_id_what_the_future_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."what_the_future"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_what_the_future" ADD CONSTRAINT "pages_blocks_what_the_future_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_support_highlights" ADD CONSTRAINT "pages_blocks_why_support_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_support_links" ADD CONSTRAINT "pages_blocks_why_support_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_support" ADD CONSTRAINT "pages_blocks_why_support_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_support" ADD CONSTRAINT "pages_blocks_why_support_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donation_methods_methods_bullets" ADD CONSTRAINT "pages_blocks_donation_methods_methods_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_donation_methods_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donation_methods_methods" ADD CONSTRAINT "pages_blocks_donation_methods_methods_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_donation_methods_methods" ADD CONSTRAINT "pages_blocks_donation_methods_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_donation_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donation_methods_corporate_links" ADD CONSTRAINT "pages_blocks_donation_methods_corporate_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_donation_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_donation_methods" ADD CONSTRAINT "pages_blocks_donation_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_floating_image_id_media_id_fk" FOREIGN KEY ("hero_floating_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_texts" ADD CONSTRAINT "pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_guided_workshops_fk" FOREIGN KEY ("guided_workshops_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_high_impact_links" ADD CONSTRAINT "_pages_v_version_hero_high_impact_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_features" ADD CONSTRAINT "_pages_v_version_hero_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_stats" ADD CONSTRAINT "_pages_v_version_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donate_amounts" ADD CONSTRAINT "_pages_v_blocks_donate_amounts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_donate"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donate_links" ADD CONSTRAINT "_pages_v_blocks_donate_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_donate"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donate" ADD CONSTRAINT "_pages_v_blocks_donate_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donate" ADD CONSTRAINT "_pages_v_blocks_donate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donate_story" ADD CONSTRAINT "_pages_v_blocks_donate_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_present_courses_links" ADD CONSTRAINT "_pages_v_blocks_present_courses_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_present_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_present_courses_modules_items" ADD CONSTRAINT "_pages_v_blocks_present_courses_modules_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_present_courses_modules_items" ADD CONSTRAINT "_pages_v_blocks_present_courses_modules_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_present_courses_modules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_present_courses_modules" ADD CONSTRAINT "_pages_v_blocks_present_courses_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_present_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_present_courses" ADD CONSTRAINT "_pages_v_blocks_present_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rules_and_values_values" ADD CONSTRAINT "_pages_v_blocks_rules_and_values_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rules_and_values"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rules_and_values_rules" ADD CONSTRAINT "_pages_v_blocks_rules_and_values_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rules_and_values"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rules_and_values" ADD CONSTRAINT "_pages_v_blocks_rules_and_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_links" ADD CONSTRAINT "_pages_v_blocks_about_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about" ADD CONSTRAINT "_pages_v_blocks_about_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about" ADD CONSTRAINT "_pages_v_blocks_about_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about" ADD CONSTRAINT "_pages_v_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_features" ADD CONSTRAINT "_pages_v_blocks_guided_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_guided"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided" ADD CONSTRAINT "_pages_v_blocks_guided_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided" ADD CONSTRAINT "_pages_v_blocks_guided_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_gl_module_labels_v" ADD CONSTRAINT "_gl_module_labels_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_guided_learning_by_year"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_learning_by_year" ADD CONSTRAINT "_pages_v_blocks_guided_learning_by_year_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_categories_questions" ADD CONSTRAINT "_pages_v_blocks_faq_categories_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_categories" ADD CONSTRAINT "_pages_v_blocks_faq_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_links" ADD CONSTRAINT "_pages_v_blocks_faq_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_links" ADD CONSTRAINT "_pages_v_blocks_playground_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_playground"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground" ADD CONSTRAINT "_pages_v_blocks_playground_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground" ADD CONSTRAINT "_pages_v_blocks_playground_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_journey_areas_links" ADD CONSTRAINT "_pages_v_blocks_playground_journey_areas_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_playground_journey_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_journey_areas" ADD CONSTRAINT "_pages_v_blocks_playground_journey_areas_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_journey_areas" ADD CONSTRAINT "_pages_v_blocks_playground_journey_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_playground_journey"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_journey" ADD CONSTRAINT "_pages_v_blocks_playground_journey_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_map" ADD CONSTRAINT "_pages_v_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_examples_links" ADD CONSTRAINT "_pages_v_blocks_guided_examples_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_guided_examples"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_examples" ADD CONSTRAINT "_pages_v_blocks_guided_examples_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_examples_links" ADD CONSTRAINT "_pages_v_blocks_playground_examples_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_playground_examples"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_examples" ADD CONSTRAINT "_pages_v_blocks_playground_examples_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_teachers_teachers" ADD CONSTRAINT "_pages_v_blocks_teachers_teachers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_teachers_teachers" ADD CONSTRAINT "_pages_v_blocks_teachers_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_teachers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_teachers_links" ADD CONSTRAINT "_pages_v_blocks_teachers_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_teachers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_teachers" ADD CONSTRAINT "_pages_v_blocks_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_teacher" ADD CONSTRAINT "_pages_v_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_teacher" ADD CONSTRAINT "_pages_v_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_story_images" ADD CONSTRAINT "_pages_v_blocks_about_story_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_story_images" ADD CONSTRAINT "_pages_v_blocks_about_story_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_story_links" ADD CONSTRAINT "_pages_v_blocks_about_story_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_story" ADD CONSTRAINT "_pages_v_blocks_about_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_camps" ADD CONSTRAINT "_pages_v_blocks_camps_camp_id_camps_id_fk" FOREIGN KEY ("camp_id") REFERENCES "public"."camps"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_camps" ADD CONSTRAINT "_pages_v_blocks_camps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_courses_courses_links" ADD CONSTRAINT "_pages_v_blocks_guided_courses_courses_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_guided_courses_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_courses_courses" ADD CONSTRAINT "_pages_v_blocks_guided_courses_courses_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_courses_courses" ADD CONSTRAINT "_pages_v_blocks_guided_courses_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_courses_links" ADD CONSTRAINT "_pages_v_blocks_guided_courses_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_guided_courses" ADD CONSTRAINT "_pages_v_blocks_guided_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_objectives_objectives" ADD CONSTRAINT "_pages_v_blocks_objectives_objectives_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_objectives_objectives" ADD CONSTRAINT "_pages_v_blocks_objectives_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_objectives"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_objectives_links" ADD CONSTRAINT "_pages_v_blocks_objectives_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_objectives"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_objectives" ADD CONSTRAINT "_pages_v_blocks_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_showcase_tabs" ADD CONSTRAINT "_pages_v_blocks_playground_showcase_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_playground_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_showcase_links" ADD CONSTRAINT "_pages_v_blocks_playground_showcase_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_playground_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_playground_showcase" ADD CONSTRAINT "_pages_v_blocks_playground_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spinning_top_elements" ADD CONSTRAINT "_pages_v_blocks_spinning_top_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_spinning_top"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spinning_top_links" ADD CONSTRAINT "_pages_v_blocks_spinning_top_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_spinning_top"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spinning_top" ADD CONSTRAINT "_pages_v_blocks_spinning_top_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_what_the_future" ADD CONSTRAINT "_pages_v_blocks_what_the_future_document_id_what_the_future_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."what_the_future"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_what_the_future" ADD CONSTRAINT "_pages_v_blocks_what_the_future_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_support_highlights" ADD CONSTRAINT "_pages_v_blocks_why_support_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_why_support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_support_links" ADD CONSTRAINT "_pages_v_blocks_why_support_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_why_support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_support" ADD CONSTRAINT "_pages_v_blocks_why_support_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_support" ADD CONSTRAINT "_pages_v_blocks_why_support_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donation_methods_methods_bullets" ADD CONSTRAINT "_pages_v_blocks_donation_methods_methods_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_donation_methods_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donation_methods_methods" ADD CONSTRAINT "_pages_v_blocks_donation_methods_methods_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donation_methods_methods" ADD CONSTRAINT "_pages_v_blocks_donation_methods_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_donation_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donation_methods_corporate_links" ADD CONSTRAINT "_pages_v_blocks_donation_methods_corporate_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_donation_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_donation_methods" ADD CONSTRAINT "_pages_v_blocks_donation_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_floating_image_id_media_id_fk" FOREIGN KEY ("version_hero_floating_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_texts" ADD CONSTRAINT "_pages_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_guided_workshops_fk" FOREIGN KEY ("guided_workshops_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_teachers" ADD CONSTRAINT "guided_workshops_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_content_columns" ADD CONSTRAINT "guided_workshops_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_content" ADD CONSTRAINT "guided_workshops_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_media_block" ADD CONSTRAINT "guided_workshops_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_media_block" ADD CONSTRAINT "guided_workshops_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_cta_links" ADD CONSTRAINT "guided_workshops_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_cta" ADD CONSTRAINT "guided_workshops_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_cta" ADD CONSTRAINT "guided_workshops_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_teacher" ADD CONSTRAINT "guided_workshops_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_workshops_blocks_teacher" ADD CONSTRAINT "guided_workshops_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops" ADD CONSTRAINT "guided_workshops_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_workshops" ADD CONSTRAINT "guided_workshops_custom_form_id_forms_id_fk" FOREIGN KEY ("custom_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_workshops" ADD CONSTRAINT "guided_workshops_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_workshops_rels" ADD CONSTRAINT "guided_workshops_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_rels" ADD CONSTRAINT "guided_workshops_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_rels" ADD CONSTRAINT "guided_workshops_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_workshops_rels" ADD CONSTRAINT "guided_workshops_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_version_teachers" ADD CONSTRAINT "_guided_workshops_v_version_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_content_columns" ADD CONSTRAINT "_guided_workshops_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_content" ADD CONSTRAINT "_guided_workshops_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_media_block" ADD CONSTRAINT "_guided_workshops_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_media_block" ADD CONSTRAINT "_guided_workshops_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_cta_links" ADD CONSTRAINT "_guided_workshops_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_cta" ADD CONSTRAINT "_guided_workshops_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_cta" ADD CONSTRAINT "_guided_workshops_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_teacher" ADD CONSTRAINT "_guided_workshops_v_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_blocks_teacher" ADD CONSTRAINT "_guided_workshops_v_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v" ADD CONSTRAINT "_guided_workshops_v_parent_id_guided_workshops_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guided_workshops"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v" ADD CONSTRAINT "_guided_workshops_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v" ADD CONSTRAINT "_guided_workshops_v_version_custom_form_id_forms_id_fk" FOREIGN KEY ("version_custom_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v" ADD CONSTRAINT "_guided_workshops_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_rels" ADD CONSTRAINT "_guided_workshops_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guided_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_rels" ADD CONSTRAINT "_guided_workshops_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_rels" ADD CONSTRAINT "_guided_workshops_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_workshops_v_rels" ADD CONSTRAINT "_guided_workshops_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_teachers" ADD CONSTRAINT "guided_courses_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_content_columns" ADD CONSTRAINT "guided_courses_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_content" ADD CONSTRAINT "guided_courses_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_media_block" ADD CONSTRAINT "guided_courses_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_media_block" ADD CONSTRAINT "guided_courses_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_cta_links" ADD CONSTRAINT "guided_courses_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_cta" ADD CONSTRAINT "guided_courses_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_cta" ADD CONSTRAINT "guided_courses_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_teacher" ADD CONSTRAINT "guided_courses_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_courses_blocks_teacher" ADD CONSTRAINT "guided_courses_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses" ADD CONSTRAINT "guided_courses_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_courses" ADD CONSTRAINT "guided_courses_custom_form_id_forms_id_fk" FOREIGN KEY ("custom_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_courses" ADD CONSTRAINT "guided_courses_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_courses_rels" ADD CONSTRAINT "guided_courses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_rels" ADD CONSTRAINT "guided_courses_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_rels" ADD CONSTRAINT "guided_courses_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_courses_rels" ADD CONSTRAINT "guided_courses_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_version_teachers" ADD CONSTRAINT "_guided_courses_v_version_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_content_columns" ADD CONSTRAINT "_guided_courses_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_content" ADD CONSTRAINT "_guided_courses_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_media_block" ADD CONSTRAINT "_guided_courses_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_media_block" ADD CONSTRAINT "_guided_courses_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_cta_links" ADD CONSTRAINT "_guided_courses_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_cta" ADD CONSTRAINT "_guided_courses_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_cta" ADD CONSTRAINT "_guided_courses_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_teacher" ADD CONSTRAINT "_guided_courses_v_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_blocks_teacher" ADD CONSTRAINT "_guided_courses_v_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v" ADD CONSTRAINT "_guided_courses_v_parent_id_guided_courses_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guided_courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v" ADD CONSTRAINT "_guided_courses_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v" ADD CONSTRAINT "_guided_courses_v_version_custom_form_id_forms_id_fk" FOREIGN KEY ("version_custom_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v" ADD CONSTRAINT "_guided_courses_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_rels" ADD CONSTRAINT "_guided_courses_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guided_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_rels" ADD CONSTRAINT "_guided_courses_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_rels" ADD CONSTRAINT "_guided_courses_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_courses_v_rels" ADD CONSTRAINT "_guided_courses_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_teachers" ADD CONSTRAINT "guided_bootcamps_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_content_columns" ADD CONSTRAINT "guided_bootcamps_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_content" ADD CONSTRAINT "guided_bootcamps_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_media_block" ADD CONSTRAINT "guided_bootcamps_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_media_block" ADD CONSTRAINT "guided_bootcamps_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_cta_links" ADD CONSTRAINT "guided_bootcamps_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_cta" ADD CONSTRAINT "guided_bootcamps_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_cta" ADD CONSTRAINT "guided_bootcamps_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_teacher" ADD CONSTRAINT "guided_bootcamps_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_blocks_teacher" ADD CONSTRAINT "guided_bootcamps_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps" ADD CONSTRAINT "guided_bootcamps_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_bootcamps" ADD CONSTRAINT "guided_bootcamps_custom_form_id_forms_id_fk" FOREIGN KEY ("custom_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_bootcamps" ADD CONSTRAINT "guided_bootcamps_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_rels" ADD CONSTRAINT "guided_bootcamps_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_rels" ADD CONSTRAINT "guided_bootcamps_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_rels" ADD CONSTRAINT "guided_bootcamps_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guided_bootcamps_rels" ADD CONSTRAINT "guided_bootcamps_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_version_teachers" ADD CONSTRAINT "_guided_bootcamps_v_version_teachers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_content_columns" ADD CONSTRAINT "_guided_bootcamps_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_content" ADD CONSTRAINT "_guided_bootcamps_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_media_block" ADD CONSTRAINT "_guided_bootcamps_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_media_block" ADD CONSTRAINT "_guided_bootcamps_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_cta_links" ADD CONSTRAINT "_guided_bootcamps_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_cta" ADD CONSTRAINT "_guided_bootcamps_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_cta" ADD CONSTRAINT "_guided_bootcamps_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_teacher" ADD CONSTRAINT "_guided_bootcamps_v_blocks_teacher_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_blocks_teacher" ADD CONSTRAINT "_guided_bootcamps_v_blocks_teacher_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guided_bootcamps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v" ADD CONSTRAINT "_guided_bootcamps_v_parent_id_guided_bootcamps_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v" ADD CONSTRAINT "_guided_bootcamps_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v" ADD CONSTRAINT "_guided_bootcamps_v_version_custom_form_id_forms_id_fk" FOREIGN KEY ("version_custom_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v" ADD CONSTRAINT "_guided_bootcamps_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_rels" ADD CONSTRAINT "_guided_bootcamps_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guided_bootcamps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_rels" ADD CONSTRAINT "_guided_bootcamps_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_rels" ADD CONSTRAINT "_guided_bootcamps_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guided_bootcamps_v_rels" ADD CONSTRAINT "_guided_bootcamps_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "autonomous_groups" ADD CONSTRAINT "autonomous_groups_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "autonomous_groups" ADD CONSTRAINT "autonomous_groups_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "autonomous_groups_rels" ADD CONSTRAINT "autonomous_groups_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."autonomous_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "autonomous_groups_rels" ADD CONSTRAINT "autonomous_groups_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_autonomous_groups_v" ADD CONSTRAINT "_autonomous_groups_v_parent_id_autonomous_groups_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."autonomous_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_autonomous_groups_v" ADD CONSTRAINT "_autonomous_groups_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_autonomous_groups_v" ADD CONSTRAINT "_autonomous_groups_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_autonomous_groups_v_rels" ADD CONSTRAINT "_autonomous_groups_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_autonomous_groups_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_autonomous_groups_v_rels" ADD CONSTRAINT "_autonomous_groups_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workshops" ADD CONSTRAINT "workshops_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "workshops" ADD CONSTRAINT "workshops_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "workshops_rels" ADD CONSTRAINT "workshops_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workshops_rels" ADD CONSTRAINT "workshops_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_workshops_v" ADD CONSTRAINT "_workshops_v_parent_id_workshops_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."workshops"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_workshops_v" ADD CONSTRAINT "_workshops_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_workshops_v" ADD CONSTRAINT "_workshops_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_workshops_v_rels" ADD CONSTRAINT "_workshops_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_workshops_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_workshops_v_rels" ADD CONSTRAINT "_workshops_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v" ADD CONSTRAINT "_courses_v_parent_id_courses_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v" ADD CONSTRAINT "_courses_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v" ADD CONSTRAINT "_courses_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "what_the_future_details" ADD CONSTRAINT "what_the_future_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."what_the_future"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "what_the_future_features" ADD CONSTRAINT "what_the_future_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."what_the_future"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "what_the_future_links" ADD CONSTRAINT "what_the_future_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."what_the_future"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "what_the_future" ADD CONSTRAINT "what_the_future_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "what_the_future" ADD CONSTRAINT "what_the_future_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "what_the_future_rels" ADD CONSTRAINT "what_the_future_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."what_the_future"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "what_the_future_rels" ADD CONSTRAINT "what_the_future_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "what_the_future_rels" ADD CONSTRAINT "what_the_future_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_what_the_future_v_version_details" ADD CONSTRAINT "_what_the_future_v_version_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_what_the_future_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_what_the_future_v_version_features" ADD CONSTRAINT "_what_the_future_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_what_the_future_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_what_the_future_v_version_links" ADD CONSTRAINT "_what_the_future_v_version_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_what_the_future_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_what_the_future_v" ADD CONSTRAINT "_what_the_future_v_parent_id_what_the_future_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."what_the_future"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_what_the_future_v" ADD CONSTRAINT "_what_the_future_v_version_image1_id_media_id_fk" FOREIGN KEY ("version_image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_what_the_future_v" ADD CONSTRAINT "_what_the_future_v_version_image2_id_media_id_fk" FOREIGN KEY ("version_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_what_the_future_v_rels" ADD CONSTRAINT "_what_the_future_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_what_the_future_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_what_the_future_v_rels" ADD CONSTRAINT "_what_the_future_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_what_the_future_v_rels" ADD CONSTRAINT "_what_the_future_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "camps_features" ADD CONSTRAINT "camps_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."camps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "camps_links" ADD CONSTRAINT "camps_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."camps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "camps" ADD CONSTRAINT "camps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "camps_rels" ADD CONSTRAINT "camps_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."camps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "camps_rels" ADD CONSTRAINT "camps_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "camps_rels" ADD CONSTRAINT "camps_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_camps_v_version_features" ADD CONSTRAINT "_camps_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_camps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_camps_v_version_links" ADD CONSTRAINT "_camps_v_version_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_camps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_camps_v" ADD CONSTRAINT "_camps_v_parent_id_camps_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."camps"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_camps_v" ADD CONSTRAINT "_camps_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_camps_v_rels" ADD CONSTRAINT "_camps_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_camps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_camps_v_rels" ADD CONSTRAINT "_camps_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_camps_v_rels" ADD CONSTRAINT "_camps_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_rels" ADD CONSTRAINT "forms_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_rels" ADD CONSTRAINT "forms_rels_guided_workshops_fk" FOREIGN KEY ("guided_workshops_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_rels" ADD CONSTRAINT "forms_rels_guided_courses_fk" FOREIGN KEY ("guided_courses_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_rels" ADD CONSTRAINT "forms_rels_guided_bootcamps_fk" FOREIGN KEY ("guided_bootcamps_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "form_submissions_rels" ADD CONSTRAINT "form_submissions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_rels" ADD CONSTRAINT "form_submissions_rels_guided_workshops_fk" FOREIGN KEY ("guided_workshops_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_rels" ADD CONSTRAINT "form_submissions_rels_guided_courses_fk" FOREIGN KEY ("guided_courses_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_rels" ADD CONSTRAINT "form_submissions_rels_guided_bootcamps_fk" FOREIGN KEY ("guided_bootcamps_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_mcp_api_keys" ADD CONSTRAINT "payload_mcp_api_keys_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders_folder_type" ADD CONSTRAINT "payload_folders_folder_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders" ADD CONSTRAINT "payload_folders_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guided_workshops_fk" FOREIGN KEY ("guided_workshops_id") REFERENCES "public"."guided_workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guided_courses_fk" FOREIGN KEY ("guided_courses_id") REFERENCES "public"."guided_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guided_bootcamps_fk" FOREIGN KEY ("guided_bootcamps_id") REFERENCES "public"."guided_bootcamps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_autonomous_groups_fk" FOREIGN KEY ("autonomous_groups_id") REFERENCES "public"."autonomous_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_workshops_fk" FOREIGN KEY ("workshops_id") REFERENCES "public"."workshops"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_what_the_future_fk" FOREIGN KEY ("what_the_future_id") REFERENCES "public"."what_the_future"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_camps_fk" FOREIGN KEY ("camps_id") REFERENCES "public"."camps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_mcp_api_keys_fk" FOREIGN KEY ("payload_mcp_api_keys_id") REFERENCES "public"."payload_mcp_api_keys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_folders_fk" FOREIGN KEY ("payload_folders_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_payload_mcp_api_keys_fk" FOREIGN KEY ("payload_mcp_api_keys_id") REFERENCES "public"."payload_mcp_api_keys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "socials_platforms" ADD CONSTRAINT "socials_platforms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."socials"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_high_impact_links_order_idx" ON "pages_hero_high_impact_links" USING btree ("_order");
  CREATE INDEX "pages_hero_high_impact_links_parent_id_idx" ON "pages_hero_high_impact_links" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_features_order_idx" ON "pages_hero_features" USING btree ("_order");
  CREATE INDEX "pages_hero_features_parent_id_idx" ON "pages_hero_features" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_stats_order_idx" ON "pages_hero_stats" USING btree ("_order");
  CREATE INDEX "pages_hero_stats_parent_id_idx" ON "pages_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_image_idx" ON "pages_blocks_cta" USING btree ("image_id");
  CREATE INDEX "pages_blocks_donate_amounts_order_idx" ON "pages_blocks_donate_amounts" USING btree ("_order");
  CREATE INDEX "pages_blocks_donate_amounts_parent_id_idx" ON "pages_blocks_donate_amounts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donate_links_order_idx" ON "pages_blocks_donate_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_donate_links_parent_id_idx" ON "pages_blocks_donate_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donate_order_idx" ON "pages_blocks_donate" USING btree ("_order");
  CREATE INDEX "pages_blocks_donate_parent_id_idx" ON "pages_blocks_donate" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donate_path_idx" ON "pages_blocks_donate" USING btree ("_path");
  CREATE INDEX "pages_blocks_donate_image_idx" ON "pages_blocks_donate" USING btree ("image_id");
  CREATE INDEX "pages_blocks_donate_story_order_idx" ON "pages_blocks_donate_story" USING btree ("_order");
  CREATE INDEX "pages_blocks_donate_story_parent_id_idx" ON "pages_blocks_donate_story" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donate_story_path_idx" ON "pages_blocks_donate_story" USING btree ("_path");
  CREATE INDEX "pages_blocks_present_courses_links_order_idx" ON "pages_blocks_present_courses_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_present_courses_links_parent_id_idx" ON "pages_blocks_present_courses_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_present_courses_modules_items_order_idx" ON "pages_blocks_present_courses_modules_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_present_courses_modules_items_parent_id_idx" ON "pages_blocks_present_courses_modules_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_present_courses_modules_items_image_idx" ON "pages_blocks_present_courses_modules_items" USING btree ("image_id");
  CREATE INDEX "pages_blocks_present_courses_modules_order_idx" ON "pages_blocks_present_courses_modules" USING btree ("_order");
  CREATE INDEX "pages_blocks_present_courses_modules_parent_id_idx" ON "pages_blocks_present_courses_modules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_present_courses_order_idx" ON "pages_blocks_present_courses" USING btree ("_order");
  CREATE INDEX "pages_blocks_present_courses_parent_id_idx" ON "pages_blocks_present_courses" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_present_courses_path_idx" ON "pages_blocks_present_courses" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_timeline_items_order_idx" ON "pages_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_items_parent_id_idx" ON "pages_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_items_photo_idx" ON "pages_blocks_timeline_items" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE INDEX "pages_blocks_rules_and_values_values_order_idx" ON "pages_blocks_rules_and_values_values" USING btree ("_order");
  CREATE INDEX "pages_blocks_rules_and_values_values_parent_id_idx" ON "pages_blocks_rules_and_values_values" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rules_and_values_rules_order_idx" ON "pages_blocks_rules_and_values_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_rules_and_values_rules_parent_id_idx" ON "pages_blocks_rules_and_values_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rules_and_values_order_idx" ON "pages_blocks_rules_and_values" USING btree ("_order");
  CREATE INDEX "pages_blocks_rules_and_values_parent_id_idx" ON "pages_blocks_rules_and_values" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rules_and_values_path_idx" ON "pages_blocks_rules_and_values" USING btree ("_path");
  CREATE INDEX "pages_blocks_about_links_order_idx" ON "pages_blocks_about_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_links_parent_id_idx" ON "pages_blocks_about_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_order_idx" ON "pages_blocks_about" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_parent_id_idx" ON "pages_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_path_idx" ON "pages_blocks_about" USING btree ("_path");
  CREATE INDEX "pages_blocks_about_video_idx" ON "pages_blocks_about" USING btree ("video_id");
  CREATE INDEX "pages_blocks_about_poster_idx" ON "pages_blocks_about" USING btree ("poster_id");
  CREATE INDEX "pages_blocks_guided_features_order_idx" ON "pages_blocks_guided_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_features_parent_id_idx" ON "pages_blocks_guided_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_order_idx" ON "pages_blocks_guided" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_parent_id_idx" ON "pages_blocks_guided" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_path_idx" ON "pages_blocks_guided" USING btree ("_path");
  CREATE INDEX "pages_blocks_guided_image_idx" ON "pages_blocks_guided" USING btree ("image_id");
  CREATE INDEX "gl_module_labels_order_idx" ON "gl_module_labels" USING btree ("_order");
  CREATE INDEX "gl_module_labels_parent_id_idx" ON "gl_module_labels" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_learning_by_year_order_idx" ON "pages_blocks_guided_learning_by_year" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_learning_by_year_parent_id_idx" ON "pages_blocks_guided_learning_by_year" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_learning_by_year_path_idx" ON "pages_blocks_guided_learning_by_year" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_categories_questions_order_idx" ON "pages_blocks_faq_categories_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_categories_questions_parent_id_idx" ON "pages_blocks_faq_categories_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_categories_order_idx" ON "pages_blocks_faq_categories" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_categories_parent_id_idx" ON "pages_blocks_faq_categories" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_links_order_idx" ON "pages_blocks_faq_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_links_parent_id_idx" ON "pages_blocks_faq_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_playground_links_order_idx" ON "pages_blocks_playground_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_links_parent_id_idx" ON "pages_blocks_playground_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_order_idx" ON "pages_blocks_playground" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_parent_id_idx" ON "pages_blocks_playground" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_path_idx" ON "pages_blocks_playground" USING btree ("_path");
  CREATE INDEX "pages_blocks_playground_image_idx" ON "pages_blocks_playground" USING btree ("image_id");
  CREATE INDEX "pages_blocks_testimonials_testimonials_order_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_testimonials_parent_id_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_testimonials_image_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("image_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_playground_journey_areas_links_order_idx" ON "pages_blocks_playground_journey_areas_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_journey_areas_links_parent_id_idx" ON "pages_blocks_playground_journey_areas_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_journey_areas_order_idx" ON "pages_blocks_playground_journey_areas" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_journey_areas_parent_id_idx" ON "pages_blocks_playground_journey_areas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_journey_areas_image_idx" ON "pages_blocks_playground_journey_areas" USING btree ("image_id");
  CREATE INDEX "pages_blocks_playground_journey_order_idx" ON "pages_blocks_playground_journey" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_journey_parent_id_idx" ON "pages_blocks_playground_journey" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_journey_path_idx" ON "pages_blocks_playground_journey" USING btree ("_path");
  CREATE INDEX "pages_blocks_map_order_idx" ON "pages_blocks_map" USING btree ("_order");
  CREATE INDEX "pages_blocks_map_parent_id_idx" ON "pages_blocks_map" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_map_path_idx" ON "pages_blocks_map" USING btree ("_path");
  CREATE INDEX "pages_blocks_guided_examples_links_order_idx" ON "pages_blocks_guided_examples_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_examples_links_parent_id_idx" ON "pages_blocks_guided_examples_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_examples_order_idx" ON "pages_blocks_guided_examples" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_examples_parent_id_idx" ON "pages_blocks_guided_examples" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_examples_path_idx" ON "pages_blocks_guided_examples" USING btree ("_path");
  CREATE INDEX "pages_blocks_playground_examples_links_order_idx" ON "pages_blocks_playground_examples_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_examples_links_parent_id_idx" ON "pages_blocks_playground_examples_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_examples_order_idx" ON "pages_blocks_playground_examples" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_examples_parent_id_idx" ON "pages_blocks_playground_examples" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_examples_path_idx" ON "pages_blocks_playground_examples" USING btree ("_path");
  CREATE INDEX "pages_blocks_teachers_teachers_order_idx" ON "pages_blocks_teachers_teachers" USING btree ("_order");
  CREATE INDEX "pages_blocks_teachers_teachers_parent_id_idx" ON "pages_blocks_teachers_teachers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_teachers_teachers_image_idx" ON "pages_blocks_teachers_teachers" USING btree ("image_id");
  CREATE INDEX "pages_blocks_teachers_links_order_idx" ON "pages_blocks_teachers_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_teachers_links_parent_id_idx" ON "pages_blocks_teachers_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_teachers_order_idx" ON "pages_blocks_teachers" USING btree ("_order");
  CREATE INDEX "pages_blocks_teachers_parent_id_idx" ON "pages_blocks_teachers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_teachers_path_idx" ON "pages_blocks_teachers" USING btree ("_path");
  CREATE INDEX "pages_blocks_teacher_order_idx" ON "pages_blocks_teacher" USING btree ("_order");
  CREATE INDEX "pages_blocks_teacher_parent_id_idx" ON "pages_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_teacher_path_idx" ON "pages_blocks_teacher" USING btree ("_path");
  CREATE INDEX "pages_blocks_teacher_image_idx" ON "pages_blocks_teacher" USING btree ("image_id");
  CREATE INDEX "pages_blocks_about_story_images_order_idx" ON "pages_blocks_about_story_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_story_images_parent_id_idx" ON "pages_blocks_about_story_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_story_images_image_idx" ON "pages_blocks_about_story_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_about_story_links_order_idx" ON "pages_blocks_about_story_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_story_links_parent_id_idx" ON "pages_blocks_about_story_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_story_order_idx" ON "pages_blocks_about_story" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_story_parent_id_idx" ON "pages_blocks_about_story" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_story_path_idx" ON "pages_blocks_about_story" USING btree ("_path");
  CREATE INDEX "pages_blocks_camps_order_idx" ON "pages_blocks_camps" USING btree ("_order");
  CREATE INDEX "pages_blocks_camps_parent_id_idx" ON "pages_blocks_camps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_camps_path_idx" ON "pages_blocks_camps" USING btree ("_path");
  CREATE INDEX "pages_blocks_camps_camp_idx" ON "pages_blocks_camps" USING btree ("camp_id");
  CREATE INDEX "pages_blocks_guided_courses_courses_links_order_idx" ON "pages_blocks_guided_courses_courses_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_courses_courses_links_parent_id_idx" ON "pages_blocks_guided_courses_courses_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_courses_courses_order_idx" ON "pages_blocks_guided_courses_courses" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_courses_courses_parent_id_idx" ON "pages_blocks_guided_courses_courses" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_courses_courses_image_idx" ON "pages_blocks_guided_courses_courses" USING btree ("image_id");
  CREATE INDEX "pages_blocks_guided_courses_links_order_idx" ON "pages_blocks_guided_courses_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_courses_links_parent_id_idx" ON "pages_blocks_guided_courses_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_courses_order_idx" ON "pages_blocks_guided_courses" USING btree ("_order");
  CREATE INDEX "pages_blocks_guided_courses_parent_id_idx" ON "pages_blocks_guided_courses" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_guided_courses_path_idx" ON "pages_blocks_guided_courses" USING btree ("_path");
  CREATE INDEX "pages_blocks_objectives_objectives_order_idx" ON "pages_blocks_objectives_objectives" USING btree ("_order");
  CREATE INDEX "pages_blocks_objectives_objectives_parent_id_idx" ON "pages_blocks_objectives_objectives" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_objectives_objectives_image_idx" ON "pages_blocks_objectives_objectives" USING btree ("image_id");
  CREATE INDEX "pages_blocks_objectives_links_order_idx" ON "pages_blocks_objectives_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_objectives_links_parent_id_idx" ON "pages_blocks_objectives_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_objectives_order_idx" ON "pages_blocks_objectives" USING btree ("_order");
  CREATE INDEX "pages_blocks_objectives_parent_id_idx" ON "pages_blocks_objectives" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_objectives_path_idx" ON "pages_blocks_objectives" USING btree ("_path");
  CREATE INDEX "pages_blocks_playground_showcase_tabs_order_idx" ON "pages_blocks_playground_showcase_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_showcase_tabs_parent_id_idx" ON "pages_blocks_playground_showcase_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_showcase_links_order_idx" ON "pages_blocks_playground_showcase_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_showcase_links_parent_id_idx" ON "pages_blocks_playground_showcase_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_showcase_order_idx" ON "pages_blocks_playground_showcase" USING btree ("_order");
  CREATE INDEX "pages_blocks_playground_showcase_parent_id_idx" ON "pages_blocks_playground_showcase" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_playground_showcase_path_idx" ON "pages_blocks_playground_showcase" USING btree ("_path");
  CREATE INDEX "pages_blocks_spinning_top_elements_order_idx" ON "pages_blocks_spinning_top_elements" USING btree ("_order");
  CREATE INDEX "pages_blocks_spinning_top_elements_parent_id_idx" ON "pages_blocks_spinning_top_elements" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spinning_top_links_order_idx" ON "pages_blocks_spinning_top_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_spinning_top_links_parent_id_idx" ON "pages_blocks_spinning_top_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spinning_top_order_idx" ON "pages_blocks_spinning_top" USING btree ("_order");
  CREATE INDEX "pages_blocks_spinning_top_parent_id_idx" ON "pages_blocks_spinning_top" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spinning_top_path_idx" ON "pages_blocks_spinning_top" USING btree ("_path");
  CREATE INDEX "pages_blocks_what_the_future_order_idx" ON "pages_blocks_what_the_future" USING btree ("_order");
  CREATE INDEX "pages_blocks_what_the_future_parent_id_idx" ON "pages_blocks_what_the_future" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_what_the_future_path_idx" ON "pages_blocks_what_the_future" USING btree ("_path");
  CREATE INDEX "pages_blocks_what_the_future_document_idx" ON "pages_blocks_what_the_future" USING btree ("document_id");
  CREATE INDEX "pages_blocks_why_support_highlights_order_idx" ON "pages_blocks_why_support_highlights" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_support_highlights_parent_id_idx" ON "pages_blocks_why_support_highlights" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_support_links_order_idx" ON "pages_blocks_why_support_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_support_links_parent_id_idx" ON "pages_blocks_why_support_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_support_order_idx" ON "pages_blocks_why_support" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_support_parent_id_idx" ON "pages_blocks_why_support" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_support_path_idx" ON "pages_blocks_why_support" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_support_image_idx" ON "pages_blocks_why_support" USING btree ("image_id");
  CREATE INDEX "pages_blocks_donation_methods_methods_bullets_order_idx" ON "pages_blocks_donation_methods_methods_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_donation_methods_methods_bullets_parent_id_idx" ON "pages_blocks_donation_methods_methods_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donation_methods_methods_order_idx" ON "pages_blocks_donation_methods_methods" USING btree ("_order");
  CREATE INDEX "pages_blocks_donation_methods_methods_parent_id_idx" ON "pages_blocks_donation_methods_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donation_methods_methods_image_idx" ON "pages_blocks_donation_methods_methods" USING btree ("image_id");
  CREATE INDEX "pages_blocks_donation_methods_corporate_links_order_idx" ON "pages_blocks_donation_methods_corporate_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_donation_methods_corporate_links_parent_id_idx" ON "pages_blocks_donation_methods_corporate_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donation_methods_order_idx" ON "pages_blocks_donation_methods" USING btree ("_order");
  CREATE INDEX "pages_blocks_donation_methods_parent_id_idx" ON "pages_blocks_donation_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_donation_methods_path_idx" ON "pages_blocks_donation_methods" USING btree ("_path");
  CREATE INDEX "pages_hero_hero_image_idx" ON "pages" USING btree ("hero_image_id");
  CREATE INDEX "pages_hero_hero_floating_image_idx" ON "pages" USING btree ("hero_floating_image_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_texts_order_parent" ON "pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "pages_rels_guided_workshops_id_idx" ON "pages_rels" USING btree ("guided_workshops_id");
  CREATE INDEX "pages_rels_events_id_idx" ON "pages_rels" USING btree ("events_id");
  CREATE INDEX "_pages_v_version_hero_high_impact_links_order_idx" ON "_pages_v_version_hero_high_impact_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_high_impact_links_parent_id_idx" ON "_pages_v_version_hero_high_impact_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_features_order_idx" ON "_pages_v_version_hero_features" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_features_parent_id_idx" ON "_pages_v_version_hero_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_stats_order_idx" ON "_pages_v_version_hero_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_stats_parent_id_idx" ON "_pages_v_version_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_image_idx" ON "_pages_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_donate_amounts_order_idx" ON "_pages_v_blocks_donate_amounts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donate_amounts_parent_id_idx" ON "_pages_v_blocks_donate_amounts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donate_links_order_idx" ON "_pages_v_blocks_donate_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donate_links_parent_id_idx" ON "_pages_v_blocks_donate_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donate_order_idx" ON "_pages_v_blocks_donate" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donate_parent_id_idx" ON "_pages_v_blocks_donate" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donate_path_idx" ON "_pages_v_blocks_donate" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_donate_image_idx" ON "_pages_v_blocks_donate" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_donate_story_order_idx" ON "_pages_v_blocks_donate_story" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donate_story_parent_id_idx" ON "_pages_v_blocks_donate_story" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donate_story_path_idx" ON "_pages_v_blocks_donate_story" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_present_courses_links_order_idx" ON "_pages_v_blocks_present_courses_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_present_courses_links_parent_id_idx" ON "_pages_v_blocks_present_courses_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_present_courses_modules_items_order_idx" ON "_pages_v_blocks_present_courses_modules_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_present_courses_modules_items_parent_id_idx" ON "_pages_v_blocks_present_courses_modules_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_present_courses_modules_items_image_idx" ON "_pages_v_blocks_present_courses_modules_items" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_present_courses_modules_order_idx" ON "_pages_v_blocks_present_courses_modules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_present_courses_modules_parent_id_idx" ON "_pages_v_blocks_present_courses_modules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_present_courses_order_idx" ON "_pages_v_blocks_present_courses" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_present_courses_parent_id_idx" ON "_pages_v_blocks_present_courses" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_present_courses_path_idx" ON "_pages_v_blocks_present_courses" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_order_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_items_parent_id_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_photo_idx" ON "_pages_v_blocks_timeline_items" USING btree ("photo_id");
  CREATE INDEX "_pages_v_blocks_timeline_order_idx" ON "_pages_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_parent_id_idx" ON "_pages_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_path_idx" ON "_pages_v_blocks_timeline" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rules_and_values_values_order_idx" ON "_pages_v_blocks_rules_and_values_values" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rules_and_values_values_parent_id_idx" ON "_pages_v_blocks_rules_and_values_values" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rules_and_values_rules_order_idx" ON "_pages_v_blocks_rules_and_values_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rules_and_values_rules_parent_id_idx" ON "_pages_v_blocks_rules_and_values_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rules_and_values_order_idx" ON "_pages_v_blocks_rules_and_values" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rules_and_values_parent_id_idx" ON "_pages_v_blocks_rules_and_values" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rules_and_values_path_idx" ON "_pages_v_blocks_rules_and_values" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_about_links_order_idx" ON "_pages_v_blocks_about_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_links_parent_id_idx" ON "_pages_v_blocks_about_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_order_idx" ON "_pages_v_blocks_about" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_parent_id_idx" ON "_pages_v_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_path_idx" ON "_pages_v_blocks_about" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_about_video_idx" ON "_pages_v_blocks_about" USING btree ("video_id");
  CREATE INDEX "_pages_v_blocks_about_poster_idx" ON "_pages_v_blocks_about" USING btree ("poster_id");
  CREATE INDEX "_pages_v_blocks_guided_features_order_idx" ON "_pages_v_blocks_guided_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_features_parent_id_idx" ON "_pages_v_blocks_guided_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_order_idx" ON "_pages_v_blocks_guided" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_parent_id_idx" ON "_pages_v_blocks_guided" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_path_idx" ON "_pages_v_blocks_guided" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_guided_image_idx" ON "_pages_v_blocks_guided" USING btree ("image_id");
  CREATE INDEX "_gl_module_labels_v_order_idx" ON "_gl_module_labels_v" USING btree ("_order");
  CREATE INDEX "_gl_module_labels_v_parent_id_idx" ON "_gl_module_labels_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_learning_by_year_order_idx" ON "_pages_v_blocks_guided_learning_by_year" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_learning_by_year_parent_id_idx" ON "_pages_v_blocks_guided_learning_by_year" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_learning_by_year_path_idx" ON "_pages_v_blocks_guided_learning_by_year" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_categories_questions_order_idx" ON "_pages_v_blocks_faq_categories_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_categories_questions_parent_id_idx" ON "_pages_v_blocks_faq_categories_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_categories_order_idx" ON "_pages_v_blocks_faq_categories" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_categories_parent_id_idx" ON "_pages_v_blocks_faq_categories" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_links_order_idx" ON "_pages_v_blocks_faq_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_links_parent_id_idx" ON "_pages_v_blocks_faq_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_playground_links_order_idx" ON "_pages_v_blocks_playground_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_links_parent_id_idx" ON "_pages_v_blocks_playground_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_order_idx" ON "_pages_v_blocks_playground" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_parent_id_idx" ON "_pages_v_blocks_playground" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_path_idx" ON "_pages_v_blocks_playground" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_playground_image_idx" ON "_pages_v_blocks_playground" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_order_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_image_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_playground_journey_areas_links_order_idx" ON "_pages_v_blocks_playground_journey_areas_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_journey_areas_links_parent_id_idx" ON "_pages_v_blocks_playground_journey_areas_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_journey_areas_order_idx" ON "_pages_v_blocks_playground_journey_areas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_journey_areas_parent_id_idx" ON "_pages_v_blocks_playground_journey_areas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_journey_areas_image_idx" ON "_pages_v_blocks_playground_journey_areas" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_playground_journey_order_idx" ON "_pages_v_blocks_playground_journey" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_journey_parent_id_idx" ON "_pages_v_blocks_playground_journey" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_journey_path_idx" ON "_pages_v_blocks_playground_journey" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_map_order_idx" ON "_pages_v_blocks_map" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_map_parent_id_idx" ON "_pages_v_blocks_map" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_map_path_idx" ON "_pages_v_blocks_map" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_guided_examples_links_order_idx" ON "_pages_v_blocks_guided_examples_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_examples_links_parent_id_idx" ON "_pages_v_blocks_guided_examples_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_examples_order_idx" ON "_pages_v_blocks_guided_examples" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_examples_parent_id_idx" ON "_pages_v_blocks_guided_examples" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_examples_path_idx" ON "_pages_v_blocks_guided_examples" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_playground_examples_links_order_idx" ON "_pages_v_blocks_playground_examples_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_examples_links_parent_id_idx" ON "_pages_v_blocks_playground_examples_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_examples_order_idx" ON "_pages_v_blocks_playground_examples" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_examples_parent_id_idx" ON "_pages_v_blocks_playground_examples" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_examples_path_idx" ON "_pages_v_blocks_playground_examples" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_teachers_teachers_order_idx" ON "_pages_v_blocks_teachers_teachers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_teachers_teachers_parent_id_idx" ON "_pages_v_blocks_teachers_teachers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_teachers_teachers_image_idx" ON "_pages_v_blocks_teachers_teachers" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_teachers_links_order_idx" ON "_pages_v_blocks_teachers_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_teachers_links_parent_id_idx" ON "_pages_v_blocks_teachers_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_teachers_order_idx" ON "_pages_v_blocks_teachers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_teachers_parent_id_idx" ON "_pages_v_blocks_teachers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_teachers_path_idx" ON "_pages_v_blocks_teachers" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_teacher_order_idx" ON "_pages_v_blocks_teacher" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_teacher_parent_id_idx" ON "_pages_v_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_teacher_path_idx" ON "_pages_v_blocks_teacher" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_teacher_image_idx" ON "_pages_v_blocks_teacher" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_about_story_images_order_idx" ON "_pages_v_blocks_about_story_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_story_images_parent_id_idx" ON "_pages_v_blocks_about_story_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_story_images_image_idx" ON "_pages_v_blocks_about_story_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_about_story_links_order_idx" ON "_pages_v_blocks_about_story_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_story_links_parent_id_idx" ON "_pages_v_blocks_about_story_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_story_order_idx" ON "_pages_v_blocks_about_story" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_story_parent_id_idx" ON "_pages_v_blocks_about_story" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_story_path_idx" ON "_pages_v_blocks_about_story" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_camps_order_idx" ON "_pages_v_blocks_camps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_camps_parent_id_idx" ON "_pages_v_blocks_camps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_camps_path_idx" ON "_pages_v_blocks_camps" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_camps_camp_idx" ON "_pages_v_blocks_camps" USING btree ("camp_id");
  CREATE INDEX "_pages_v_blocks_guided_courses_courses_links_order_idx" ON "_pages_v_blocks_guided_courses_courses_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_courses_courses_links_parent_id_idx" ON "_pages_v_blocks_guided_courses_courses_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_courses_courses_order_idx" ON "_pages_v_blocks_guided_courses_courses" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_courses_courses_parent_id_idx" ON "_pages_v_blocks_guided_courses_courses" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_courses_courses_image_idx" ON "_pages_v_blocks_guided_courses_courses" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_guided_courses_links_order_idx" ON "_pages_v_blocks_guided_courses_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_courses_links_parent_id_idx" ON "_pages_v_blocks_guided_courses_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_courses_order_idx" ON "_pages_v_blocks_guided_courses" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_guided_courses_parent_id_idx" ON "_pages_v_blocks_guided_courses" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_guided_courses_path_idx" ON "_pages_v_blocks_guided_courses" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_objectives_objectives_order_idx" ON "_pages_v_blocks_objectives_objectives" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_objectives_objectives_parent_id_idx" ON "_pages_v_blocks_objectives_objectives" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_objectives_objectives_image_idx" ON "_pages_v_blocks_objectives_objectives" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_objectives_links_order_idx" ON "_pages_v_blocks_objectives_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_objectives_links_parent_id_idx" ON "_pages_v_blocks_objectives_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_objectives_order_idx" ON "_pages_v_blocks_objectives" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_objectives_parent_id_idx" ON "_pages_v_blocks_objectives" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_objectives_path_idx" ON "_pages_v_blocks_objectives" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_playground_showcase_tabs_order_idx" ON "_pages_v_blocks_playground_showcase_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_showcase_tabs_parent_id_idx" ON "_pages_v_blocks_playground_showcase_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_showcase_links_order_idx" ON "_pages_v_blocks_playground_showcase_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_showcase_links_parent_id_idx" ON "_pages_v_blocks_playground_showcase_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_showcase_order_idx" ON "_pages_v_blocks_playground_showcase" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_playground_showcase_parent_id_idx" ON "_pages_v_blocks_playground_showcase" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_playground_showcase_path_idx" ON "_pages_v_blocks_playground_showcase" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_spinning_top_elements_order_idx" ON "_pages_v_blocks_spinning_top_elements" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spinning_top_elements_parent_id_idx" ON "_pages_v_blocks_spinning_top_elements" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spinning_top_links_order_idx" ON "_pages_v_blocks_spinning_top_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spinning_top_links_parent_id_idx" ON "_pages_v_blocks_spinning_top_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spinning_top_order_idx" ON "_pages_v_blocks_spinning_top" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spinning_top_parent_id_idx" ON "_pages_v_blocks_spinning_top" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spinning_top_path_idx" ON "_pages_v_blocks_spinning_top" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_what_the_future_order_idx" ON "_pages_v_blocks_what_the_future" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_what_the_future_parent_id_idx" ON "_pages_v_blocks_what_the_future" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_what_the_future_path_idx" ON "_pages_v_blocks_what_the_future" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_what_the_future_document_idx" ON "_pages_v_blocks_what_the_future" USING btree ("document_id");
  CREATE INDEX "_pages_v_blocks_why_support_highlights_order_idx" ON "_pages_v_blocks_why_support_highlights" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_support_highlights_parent_id_idx" ON "_pages_v_blocks_why_support_highlights" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_support_links_order_idx" ON "_pages_v_blocks_why_support_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_support_links_parent_id_idx" ON "_pages_v_blocks_why_support_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_support_order_idx" ON "_pages_v_blocks_why_support" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_support_parent_id_idx" ON "_pages_v_blocks_why_support" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_support_path_idx" ON "_pages_v_blocks_why_support" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_why_support_image_idx" ON "_pages_v_blocks_why_support" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_donation_methods_methods_bullets_order_idx" ON "_pages_v_blocks_donation_methods_methods_bullets" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donation_methods_methods_bullets_parent_id_idx" ON "_pages_v_blocks_donation_methods_methods_bullets" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donation_methods_methods_order_idx" ON "_pages_v_blocks_donation_methods_methods" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donation_methods_methods_parent_id_idx" ON "_pages_v_blocks_donation_methods_methods" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donation_methods_methods_image_idx" ON "_pages_v_blocks_donation_methods_methods" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_donation_methods_corporate_links_order_idx" ON "_pages_v_blocks_donation_methods_corporate_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donation_methods_corporate_links_parent_id_idx" ON "_pages_v_blocks_donation_methods_corporate_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donation_methods_order_idx" ON "_pages_v_blocks_donation_methods" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_donation_methods_parent_id_idx" ON "_pages_v_blocks_donation_methods" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_donation_methods_path_idx" ON "_pages_v_blocks_donation_methods" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_image_idx" ON "_pages_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_floating_image_idx" ON "_pages_v" USING btree ("version_hero_floating_image_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_texts_order_parent" ON "_pages_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_rels_guided_workshops_id_idx" ON "_pages_v_rels" USING btree ("guided_workshops_id");
  CREATE INDEX "_pages_v_rels_events_id_idx" ON "_pages_v_rels" USING btree ("events_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "media_folder_idx" ON "media" USING btree ("folder_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "guided_workshops_teachers_order_idx" ON "guided_workshops_teachers" USING btree ("_order");
  CREATE INDEX "guided_workshops_teachers_parent_id_idx" ON "guided_workshops_teachers" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_content_columns_order_idx" ON "guided_workshops_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "guided_workshops_blocks_content_columns_parent_id_idx" ON "guided_workshops_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_content_order_idx" ON "guided_workshops_blocks_content" USING btree ("_order");
  CREATE INDEX "guided_workshops_blocks_content_parent_id_idx" ON "guided_workshops_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_content_path_idx" ON "guided_workshops_blocks_content" USING btree ("_path");
  CREATE INDEX "guided_workshops_blocks_media_block_order_idx" ON "guided_workshops_blocks_media_block" USING btree ("_order");
  CREATE INDEX "guided_workshops_blocks_media_block_parent_id_idx" ON "guided_workshops_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_media_block_path_idx" ON "guided_workshops_blocks_media_block" USING btree ("_path");
  CREATE INDEX "guided_workshops_blocks_media_block_media_idx" ON "guided_workshops_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "guided_workshops_blocks_cta_links_order_idx" ON "guided_workshops_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "guided_workshops_blocks_cta_links_parent_id_idx" ON "guided_workshops_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_cta_order_idx" ON "guided_workshops_blocks_cta" USING btree ("_order");
  CREATE INDEX "guided_workshops_blocks_cta_parent_id_idx" ON "guided_workshops_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_cta_path_idx" ON "guided_workshops_blocks_cta" USING btree ("_path");
  CREATE INDEX "guided_workshops_blocks_cta_image_idx" ON "guided_workshops_blocks_cta" USING btree ("image_id");
  CREATE INDEX "guided_workshops_blocks_teacher_order_idx" ON "guided_workshops_blocks_teacher" USING btree ("_order");
  CREATE INDEX "guided_workshops_blocks_teacher_parent_id_idx" ON "guided_workshops_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "guided_workshops_blocks_teacher_path_idx" ON "guided_workshops_blocks_teacher" USING btree ("_path");
  CREATE INDEX "guided_workshops_blocks_teacher_image_idx" ON "guided_workshops_blocks_teacher" USING btree ("image_id");
  CREATE UNIQUE INDEX "guided_workshops_slug_idx" ON "guided_workshops" USING btree ("slug");
  CREATE INDEX "guided_workshops_photo_idx" ON "guided_workshops" USING btree ("photo_id");
  CREATE INDEX "guided_workshops_custom_form_idx" ON "guided_workshops" USING btree ("custom_form_id");
  CREATE INDEX "guided_workshops_meta_meta_image_idx" ON "guided_workshops" USING btree ("meta_image_id");
  CREATE INDEX "guided_workshops_updated_at_idx" ON "guided_workshops" USING btree ("updated_at");
  CREATE INDEX "guided_workshops_created_at_idx" ON "guided_workshops" USING btree ("created_at");
  CREATE INDEX "guided_workshops__status_idx" ON "guided_workshops" USING btree ("_status");
  CREATE INDEX "guided_workshops_rels_order_idx" ON "guided_workshops_rels" USING btree ("order");
  CREATE INDEX "guided_workshops_rels_parent_idx" ON "guided_workshops_rels" USING btree ("parent_id");
  CREATE INDEX "guided_workshops_rels_path_idx" ON "guided_workshops_rels" USING btree ("path");
  CREATE INDEX "guided_workshops_rels_pages_id_idx" ON "guided_workshops_rels" USING btree ("pages_id");
  CREATE INDEX "guided_workshops_rels_posts_id_idx" ON "guided_workshops_rels" USING btree ("posts_id");
  CREATE INDEX "guided_workshops_rels_users_id_idx" ON "guided_workshops_rels" USING btree ("users_id");
  CREATE INDEX "_guided_workshops_v_version_teachers_order_idx" ON "_guided_workshops_v_version_teachers" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_version_teachers_parent_id_idx" ON "_guided_workshops_v_version_teachers" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_content_columns_order_idx" ON "_guided_workshops_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_blocks_content_columns_parent_id_idx" ON "_guided_workshops_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_content_order_idx" ON "_guided_workshops_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_blocks_content_parent_id_idx" ON "_guided_workshops_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_content_path_idx" ON "_guided_workshops_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_guided_workshops_v_blocks_media_block_order_idx" ON "_guided_workshops_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_blocks_media_block_parent_id_idx" ON "_guided_workshops_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_media_block_path_idx" ON "_guided_workshops_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_guided_workshops_v_blocks_media_block_media_idx" ON "_guided_workshops_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_guided_workshops_v_blocks_cta_links_order_idx" ON "_guided_workshops_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_blocks_cta_links_parent_id_idx" ON "_guided_workshops_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_cta_order_idx" ON "_guided_workshops_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_blocks_cta_parent_id_idx" ON "_guided_workshops_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_cta_path_idx" ON "_guided_workshops_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_guided_workshops_v_blocks_cta_image_idx" ON "_guided_workshops_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_guided_workshops_v_blocks_teacher_order_idx" ON "_guided_workshops_v_blocks_teacher" USING btree ("_order");
  CREATE INDEX "_guided_workshops_v_blocks_teacher_parent_id_idx" ON "_guided_workshops_v_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "_guided_workshops_v_blocks_teacher_path_idx" ON "_guided_workshops_v_blocks_teacher" USING btree ("_path");
  CREATE INDEX "_guided_workshops_v_blocks_teacher_image_idx" ON "_guided_workshops_v_blocks_teacher" USING btree ("image_id");
  CREATE INDEX "_guided_workshops_v_parent_idx" ON "_guided_workshops_v" USING btree ("parent_id");
  CREATE INDEX "_guided_workshops_v_version_version_slug_idx" ON "_guided_workshops_v" USING btree ("version_slug");
  CREATE INDEX "_guided_workshops_v_version_version_photo_idx" ON "_guided_workshops_v" USING btree ("version_photo_id");
  CREATE INDEX "_guided_workshops_v_version_version_custom_form_idx" ON "_guided_workshops_v" USING btree ("version_custom_form_id");
  CREATE INDEX "_guided_workshops_v_version_meta_version_meta_image_idx" ON "_guided_workshops_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_guided_workshops_v_version_version_updated_at_idx" ON "_guided_workshops_v" USING btree ("version_updated_at");
  CREATE INDEX "_guided_workshops_v_version_version_created_at_idx" ON "_guided_workshops_v" USING btree ("version_created_at");
  CREATE INDEX "_guided_workshops_v_version_version__status_idx" ON "_guided_workshops_v" USING btree ("version__status");
  CREATE INDEX "_guided_workshops_v_created_at_idx" ON "_guided_workshops_v" USING btree ("created_at");
  CREATE INDEX "_guided_workshops_v_updated_at_idx" ON "_guided_workshops_v" USING btree ("updated_at");
  CREATE INDEX "_guided_workshops_v_latest_idx" ON "_guided_workshops_v" USING btree ("latest");
  CREATE INDEX "_guided_workshops_v_autosave_idx" ON "_guided_workshops_v" USING btree ("autosave");
  CREATE INDEX "_guided_workshops_v_rels_order_idx" ON "_guided_workshops_v_rels" USING btree ("order");
  CREATE INDEX "_guided_workshops_v_rels_parent_idx" ON "_guided_workshops_v_rels" USING btree ("parent_id");
  CREATE INDEX "_guided_workshops_v_rels_path_idx" ON "_guided_workshops_v_rels" USING btree ("path");
  CREATE INDEX "_guided_workshops_v_rels_pages_id_idx" ON "_guided_workshops_v_rels" USING btree ("pages_id");
  CREATE INDEX "_guided_workshops_v_rels_posts_id_idx" ON "_guided_workshops_v_rels" USING btree ("posts_id");
  CREATE INDEX "_guided_workshops_v_rels_users_id_idx" ON "_guided_workshops_v_rels" USING btree ("users_id");
  CREATE INDEX "guided_courses_teachers_order_idx" ON "guided_courses_teachers" USING btree ("_order");
  CREATE INDEX "guided_courses_teachers_parent_id_idx" ON "guided_courses_teachers" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_content_columns_order_idx" ON "guided_courses_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "guided_courses_blocks_content_columns_parent_id_idx" ON "guided_courses_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_content_order_idx" ON "guided_courses_blocks_content" USING btree ("_order");
  CREATE INDEX "guided_courses_blocks_content_parent_id_idx" ON "guided_courses_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_content_path_idx" ON "guided_courses_blocks_content" USING btree ("_path");
  CREATE INDEX "guided_courses_blocks_media_block_order_idx" ON "guided_courses_blocks_media_block" USING btree ("_order");
  CREATE INDEX "guided_courses_blocks_media_block_parent_id_idx" ON "guided_courses_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_media_block_path_idx" ON "guided_courses_blocks_media_block" USING btree ("_path");
  CREATE INDEX "guided_courses_blocks_media_block_media_idx" ON "guided_courses_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "guided_courses_blocks_cta_links_order_idx" ON "guided_courses_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "guided_courses_blocks_cta_links_parent_id_idx" ON "guided_courses_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_cta_order_idx" ON "guided_courses_blocks_cta" USING btree ("_order");
  CREATE INDEX "guided_courses_blocks_cta_parent_id_idx" ON "guided_courses_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_cta_path_idx" ON "guided_courses_blocks_cta" USING btree ("_path");
  CREATE INDEX "guided_courses_blocks_cta_image_idx" ON "guided_courses_blocks_cta" USING btree ("image_id");
  CREATE INDEX "guided_courses_blocks_teacher_order_idx" ON "guided_courses_blocks_teacher" USING btree ("_order");
  CREATE INDEX "guided_courses_blocks_teacher_parent_id_idx" ON "guided_courses_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "guided_courses_blocks_teacher_path_idx" ON "guided_courses_blocks_teacher" USING btree ("_path");
  CREATE INDEX "guided_courses_blocks_teacher_image_idx" ON "guided_courses_blocks_teacher" USING btree ("image_id");
  CREATE UNIQUE INDEX "guided_courses_slug_idx" ON "guided_courses" USING btree ("slug");
  CREATE INDEX "guided_courses_photo_idx" ON "guided_courses" USING btree ("photo_id");
  CREATE INDEX "guided_courses_custom_form_idx" ON "guided_courses" USING btree ("custom_form_id");
  CREATE INDEX "guided_courses_meta_meta_image_idx" ON "guided_courses" USING btree ("meta_image_id");
  CREATE INDEX "guided_courses_updated_at_idx" ON "guided_courses" USING btree ("updated_at");
  CREATE INDEX "guided_courses_created_at_idx" ON "guided_courses" USING btree ("created_at");
  CREATE INDEX "guided_courses__status_idx" ON "guided_courses" USING btree ("_status");
  CREATE INDEX "guided_courses_rels_order_idx" ON "guided_courses_rels" USING btree ("order");
  CREATE INDEX "guided_courses_rels_parent_idx" ON "guided_courses_rels" USING btree ("parent_id");
  CREATE INDEX "guided_courses_rels_path_idx" ON "guided_courses_rels" USING btree ("path");
  CREATE INDEX "guided_courses_rels_pages_id_idx" ON "guided_courses_rels" USING btree ("pages_id");
  CREATE INDEX "guided_courses_rels_posts_id_idx" ON "guided_courses_rels" USING btree ("posts_id");
  CREATE INDEX "guided_courses_rels_users_id_idx" ON "guided_courses_rels" USING btree ("users_id");
  CREATE INDEX "_guided_courses_v_version_teachers_order_idx" ON "_guided_courses_v_version_teachers" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_version_teachers_parent_id_idx" ON "_guided_courses_v_version_teachers" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_content_columns_order_idx" ON "_guided_courses_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_blocks_content_columns_parent_id_idx" ON "_guided_courses_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_content_order_idx" ON "_guided_courses_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_blocks_content_parent_id_idx" ON "_guided_courses_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_content_path_idx" ON "_guided_courses_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_guided_courses_v_blocks_media_block_order_idx" ON "_guided_courses_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_blocks_media_block_parent_id_idx" ON "_guided_courses_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_media_block_path_idx" ON "_guided_courses_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_guided_courses_v_blocks_media_block_media_idx" ON "_guided_courses_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_guided_courses_v_blocks_cta_links_order_idx" ON "_guided_courses_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_blocks_cta_links_parent_id_idx" ON "_guided_courses_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_cta_order_idx" ON "_guided_courses_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_blocks_cta_parent_id_idx" ON "_guided_courses_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_cta_path_idx" ON "_guided_courses_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_guided_courses_v_blocks_cta_image_idx" ON "_guided_courses_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_guided_courses_v_blocks_teacher_order_idx" ON "_guided_courses_v_blocks_teacher" USING btree ("_order");
  CREATE INDEX "_guided_courses_v_blocks_teacher_parent_id_idx" ON "_guided_courses_v_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "_guided_courses_v_blocks_teacher_path_idx" ON "_guided_courses_v_blocks_teacher" USING btree ("_path");
  CREATE INDEX "_guided_courses_v_blocks_teacher_image_idx" ON "_guided_courses_v_blocks_teacher" USING btree ("image_id");
  CREATE INDEX "_guided_courses_v_parent_idx" ON "_guided_courses_v" USING btree ("parent_id");
  CREATE INDEX "_guided_courses_v_version_version_slug_idx" ON "_guided_courses_v" USING btree ("version_slug");
  CREATE INDEX "_guided_courses_v_version_version_photo_idx" ON "_guided_courses_v" USING btree ("version_photo_id");
  CREATE INDEX "_guided_courses_v_version_version_custom_form_idx" ON "_guided_courses_v" USING btree ("version_custom_form_id");
  CREATE INDEX "_guided_courses_v_version_meta_version_meta_image_idx" ON "_guided_courses_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_guided_courses_v_version_version_updated_at_idx" ON "_guided_courses_v" USING btree ("version_updated_at");
  CREATE INDEX "_guided_courses_v_version_version_created_at_idx" ON "_guided_courses_v" USING btree ("version_created_at");
  CREATE INDEX "_guided_courses_v_version_version__status_idx" ON "_guided_courses_v" USING btree ("version__status");
  CREATE INDEX "_guided_courses_v_created_at_idx" ON "_guided_courses_v" USING btree ("created_at");
  CREATE INDEX "_guided_courses_v_updated_at_idx" ON "_guided_courses_v" USING btree ("updated_at");
  CREATE INDEX "_guided_courses_v_latest_idx" ON "_guided_courses_v" USING btree ("latest");
  CREATE INDEX "_guided_courses_v_autosave_idx" ON "_guided_courses_v" USING btree ("autosave");
  CREATE INDEX "_guided_courses_v_rels_order_idx" ON "_guided_courses_v_rels" USING btree ("order");
  CREATE INDEX "_guided_courses_v_rels_parent_idx" ON "_guided_courses_v_rels" USING btree ("parent_id");
  CREATE INDEX "_guided_courses_v_rels_path_idx" ON "_guided_courses_v_rels" USING btree ("path");
  CREATE INDEX "_guided_courses_v_rels_pages_id_idx" ON "_guided_courses_v_rels" USING btree ("pages_id");
  CREATE INDEX "_guided_courses_v_rels_posts_id_idx" ON "_guided_courses_v_rels" USING btree ("posts_id");
  CREATE INDEX "_guided_courses_v_rels_users_id_idx" ON "_guided_courses_v_rels" USING btree ("users_id");
  CREATE INDEX "guided_bootcamps_teachers_order_idx" ON "guided_bootcamps_teachers" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_teachers_parent_id_idx" ON "guided_bootcamps_teachers" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_content_columns_order_idx" ON "guided_bootcamps_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_blocks_content_columns_parent_id_idx" ON "guided_bootcamps_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_content_order_idx" ON "guided_bootcamps_blocks_content" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_blocks_content_parent_id_idx" ON "guided_bootcamps_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_content_path_idx" ON "guided_bootcamps_blocks_content" USING btree ("_path");
  CREATE INDEX "guided_bootcamps_blocks_media_block_order_idx" ON "guided_bootcamps_blocks_media_block" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_blocks_media_block_parent_id_idx" ON "guided_bootcamps_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_media_block_path_idx" ON "guided_bootcamps_blocks_media_block" USING btree ("_path");
  CREATE INDEX "guided_bootcamps_blocks_media_block_media_idx" ON "guided_bootcamps_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "guided_bootcamps_blocks_cta_links_order_idx" ON "guided_bootcamps_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_blocks_cta_links_parent_id_idx" ON "guided_bootcamps_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_cta_order_idx" ON "guided_bootcamps_blocks_cta" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_blocks_cta_parent_id_idx" ON "guided_bootcamps_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_cta_path_idx" ON "guided_bootcamps_blocks_cta" USING btree ("_path");
  CREATE INDEX "guided_bootcamps_blocks_cta_image_idx" ON "guided_bootcamps_blocks_cta" USING btree ("image_id");
  CREATE INDEX "guided_bootcamps_blocks_teacher_order_idx" ON "guided_bootcamps_blocks_teacher" USING btree ("_order");
  CREATE INDEX "guided_bootcamps_blocks_teacher_parent_id_idx" ON "guided_bootcamps_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "guided_bootcamps_blocks_teacher_path_idx" ON "guided_bootcamps_blocks_teacher" USING btree ("_path");
  CREATE INDEX "guided_bootcamps_blocks_teacher_image_idx" ON "guided_bootcamps_blocks_teacher" USING btree ("image_id");
  CREATE UNIQUE INDEX "guided_bootcamps_slug_idx" ON "guided_bootcamps" USING btree ("slug");
  CREATE INDEX "guided_bootcamps_photo_idx" ON "guided_bootcamps" USING btree ("photo_id");
  CREATE INDEX "guided_bootcamps_custom_form_idx" ON "guided_bootcamps" USING btree ("custom_form_id");
  CREATE INDEX "guided_bootcamps_meta_meta_image_idx" ON "guided_bootcamps" USING btree ("meta_image_id");
  CREATE INDEX "guided_bootcamps_updated_at_idx" ON "guided_bootcamps" USING btree ("updated_at");
  CREATE INDEX "guided_bootcamps_created_at_idx" ON "guided_bootcamps" USING btree ("created_at");
  CREATE INDEX "guided_bootcamps__status_idx" ON "guided_bootcamps" USING btree ("_status");
  CREATE INDEX "guided_bootcamps_rels_order_idx" ON "guided_bootcamps_rels" USING btree ("order");
  CREATE INDEX "guided_bootcamps_rels_parent_idx" ON "guided_bootcamps_rels" USING btree ("parent_id");
  CREATE INDEX "guided_bootcamps_rels_path_idx" ON "guided_bootcamps_rels" USING btree ("path");
  CREATE INDEX "guided_bootcamps_rels_pages_id_idx" ON "guided_bootcamps_rels" USING btree ("pages_id");
  CREATE INDEX "guided_bootcamps_rels_posts_id_idx" ON "guided_bootcamps_rels" USING btree ("posts_id");
  CREATE INDEX "guided_bootcamps_rels_users_id_idx" ON "guided_bootcamps_rels" USING btree ("users_id");
  CREATE INDEX "_guided_bootcamps_v_version_teachers_order_idx" ON "_guided_bootcamps_v_version_teachers" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_version_teachers_parent_id_idx" ON "_guided_bootcamps_v_version_teachers" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_content_columns_order_idx" ON "_guided_bootcamps_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_blocks_content_columns_parent_id_idx" ON "_guided_bootcamps_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_content_order_idx" ON "_guided_bootcamps_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_blocks_content_parent_id_idx" ON "_guided_bootcamps_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_content_path_idx" ON "_guided_bootcamps_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_guided_bootcamps_v_blocks_media_block_order_idx" ON "_guided_bootcamps_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_blocks_media_block_parent_id_idx" ON "_guided_bootcamps_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_media_block_path_idx" ON "_guided_bootcamps_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_guided_bootcamps_v_blocks_media_block_media_idx" ON "_guided_bootcamps_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_cta_links_order_idx" ON "_guided_bootcamps_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_blocks_cta_links_parent_id_idx" ON "_guided_bootcamps_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_cta_order_idx" ON "_guided_bootcamps_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_blocks_cta_parent_id_idx" ON "_guided_bootcamps_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_cta_path_idx" ON "_guided_bootcamps_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_guided_bootcamps_v_blocks_cta_image_idx" ON "_guided_bootcamps_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_teacher_order_idx" ON "_guided_bootcamps_v_blocks_teacher" USING btree ("_order");
  CREATE INDEX "_guided_bootcamps_v_blocks_teacher_parent_id_idx" ON "_guided_bootcamps_v_blocks_teacher" USING btree ("_parent_id");
  CREATE INDEX "_guided_bootcamps_v_blocks_teacher_path_idx" ON "_guided_bootcamps_v_blocks_teacher" USING btree ("_path");
  CREATE INDEX "_guided_bootcamps_v_blocks_teacher_image_idx" ON "_guided_bootcamps_v_blocks_teacher" USING btree ("image_id");
  CREATE INDEX "_guided_bootcamps_v_parent_idx" ON "_guided_bootcamps_v" USING btree ("parent_id");
  CREATE INDEX "_guided_bootcamps_v_version_version_slug_idx" ON "_guided_bootcamps_v" USING btree ("version_slug");
  CREATE INDEX "_guided_bootcamps_v_version_version_photo_idx" ON "_guided_bootcamps_v" USING btree ("version_photo_id");
  CREATE INDEX "_guided_bootcamps_v_version_version_custom_form_idx" ON "_guided_bootcamps_v" USING btree ("version_custom_form_id");
  CREATE INDEX "_guided_bootcamps_v_version_meta_version_meta_image_idx" ON "_guided_bootcamps_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_guided_bootcamps_v_version_version_updated_at_idx" ON "_guided_bootcamps_v" USING btree ("version_updated_at");
  CREATE INDEX "_guided_bootcamps_v_version_version_created_at_idx" ON "_guided_bootcamps_v" USING btree ("version_created_at");
  CREATE INDEX "_guided_bootcamps_v_version_version__status_idx" ON "_guided_bootcamps_v" USING btree ("version__status");
  CREATE INDEX "_guided_bootcamps_v_created_at_idx" ON "_guided_bootcamps_v" USING btree ("created_at");
  CREATE INDEX "_guided_bootcamps_v_updated_at_idx" ON "_guided_bootcamps_v" USING btree ("updated_at");
  CREATE INDEX "_guided_bootcamps_v_latest_idx" ON "_guided_bootcamps_v" USING btree ("latest");
  CREATE INDEX "_guided_bootcamps_v_autosave_idx" ON "_guided_bootcamps_v" USING btree ("autosave");
  CREATE INDEX "_guided_bootcamps_v_rels_order_idx" ON "_guided_bootcamps_v_rels" USING btree ("order");
  CREATE INDEX "_guided_bootcamps_v_rels_parent_idx" ON "_guided_bootcamps_v_rels" USING btree ("parent_id");
  CREATE INDEX "_guided_bootcamps_v_rels_path_idx" ON "_guided_bootcamps_v_rels" USING btree ("path");
  CREATE INDEX "_guided_bootcamps_v_rels_pages_id_idx" ON "_guided_bootcamps_v_rels" USING btree ("pages_id");
  CREATE INDEX "_guided_bootcamps_v_rels_posts_id_idx" ON "_guided_bootcamps_v_rels" USING btree ("posts_id");
  CREATE INDEX "_guided_bootcamps_v_rels_users_id_idx" ON "_guided_bootcamps_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX "autonomous_groups_slug_idx" ON "autonomous_groups" USING btree ("slug");
  CREATE INDEX "autonomous_groups_photo_idx" ON "autonomous_groups" USING btree ("photo_id");
  CREATE INDEX "autonomous_groups_meta_meta_image_idx" ON "autonomous_groups" USING btree ("meta_image_id");
  CREATE INDEX "autonomous_groups_updated_at_idx" ON "autonomous_groups" USING btree ("updated_at");
  CREATE INDEX "autonomous_groups_created_at_idx" ON "autonomous_groups" USING btree ("created_at");
  CREATE INDEX "autonomous_groups__status_idx" ON "autonomous_groups" USING btree ("_status");
  CREATE INDEX "autonomous_groups_rels_order_idx" ON "autonomous_groups_rels" USING btree ("order");
  CREATE INDEX "autonomous_groups_rels_parent_idx" ON "autonomous_groups_rels" USING btree ("parent_id");
  CREATE INDEX "autonomous_groups_rels_path_idx" ON "autonomous_groups_rels" USING btree ("path");
  CREATE INDEX "autonomous_groups_rels_users_id_idx" ON "autonomous_groups_rels" USING btree ("users_id");
  CREATE INDEX "_autonomous_groups_v_parent_idx" ON "_autonomous_groups_v" USING btree ("parent_id");
  CREATE INDEX "_autonomous_groups_v_version_version_slug_idx" ON "_autonomous_groups_v" USING btree ("version_slug");
  CREATE INDEX "_autonomous_groups_v_version_version_photo_idx" ON "_autonomous_groups_v" USING btree ("version_photo_id");
  CREATE INDEX "_autonomous_groups_v_version_meta_version_meta_image_idx" ON "_autonomous_groups_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_autonomous_groups_v_version_version_updated_at_idx" ON "_autonomous_groups_v" USING btree ("version_updated_at");
  CREATE INDEX "_autonomous_groups_v_version_version_created_at_idx" ON "_autonomous_groups_v" USING btree ("version_created_at");
  CREATE INDEX "_autonomous_groups_v_version_version__status_idx" ON "_autonomous_groups_v" USING btree ("version__status");
  CREATE INDEX "_autonomous_groups_v_created_at_idx" ON "_autonomous_groups_v" USING btree ("created_at");
  CREATE INDEX "_autonomous_groups_v_updated_at_idx" ON "_autonomous_groups_v" USING btree ("updated_at");
  CREATE INDEX "_autonomous_groups_v_latest_idx" ON "_autonomous_groups_v" USING btree ("latest");
  CREATE INDEX "_autonomous_groups_v_autosave_idx" ON "_autonomous_groups_v" USING btree ("autosave");
  CREATE INDEX "_autonomous_groups_v_rels_order_idx" ON "_autonomous_groups_v_rels" USING btree ("order");
  CREATE INDEX "_autonomous_groups_v_rels_parent_idx" ON "_autonomous_groups_v_rels" USING btree ("parent_id");
  CREATE INDEX "_autonomous_groups_v_rels_path_idx" ON "_autonomous_groups_v_rels" USING btree ("path");
  CREATE INDEX "_autonomous_groups_v_rels_users_id_idx" ON "_autonomous_groups_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX "workshops_slug_idx" ON "workshops" USING btree ("slug");
  CREATE INDEX "workshops_photo_idx" ON "workshops" USING btree ("photo_id");
  CREATE INDEX "workshops_meta_meta_image_idx" ON "workshops" USING btree ("meta_image_id");
  CREATE INDEX "workshops_updated_at_idx" ON "workshops" USING btree ("updated_at");
  CREATE INDEX "workshops_created_at_idx" ON "workshops" USING btree ("created_at");
  CREATE INDEX "workshops__status_idx" ON "workshops" USING btree ("_status");
  CREATE INDEX "workshops_rels_order_idx" ON "workshops_rels" USING btree ("order");
  CREATE INDEX "workshops_rels_parent_idx" ON "workshops_rels" USING btree ("parent_id");
  CREATE INDEX "workshops_rels_path_idx" ON "workshops_rels" USING btree ("path");
  CREATE INDEX "workshops_rels_users_id_idx" ON "workshops_rels" USING btree ("users_id");
  CREATE INDEX "_workshops_v_parent_idx" ON "_workshops_v" USING btree ("parent_id");
  CREATE INDEX "_workshops_v_version_version_slug_idx" ON "_workshops_v" USING btree ("version_slug");
  CREATE INDEX "_workshops_v_version_version_photo_idx" ON "_workshops_v" USING btree ("version_photo_id");
  CREATE INDEX "_workshops_v_version_meta_version_meta_image_idx" ON "_workshops_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_workshops_v_version_version_updated_at_idx" ON "_workshops_v" USING btree ("version_updated_at");
  CREATE INDEX "_workshops_v_version_version_created_at_idx" ON "_workshops_v" USING btree ("version_created_at");
  CREATE INDEX "_workshops_v_version_version__status_idx" ON "_workshops_v" USING btree ("version__status");
  CREATE INDEX "_workshops_v_created_at_idx" ON "_workshops_v" USING btree ("created_at");
  CREATE INDEX "_workshops_v_updated_at_idx" ON "_workshops_v" USING btree ("updated_at");
  CREATE INDEX "_workshops_v_latest_idx" ON "_workshops_v" USING btree ("latest");
  CREATE INDEX "_workshops_v_autosave_idx" ON "_workshops_v" USING btree ("autosave");
  CREATE INDEX "_workshops_v_rels_order_idx" ON "_workshops_v_rels" USING btree ("order");
  CREATE INDEX "_workshops_v_rels_parent_idx" ON "_workshops_v_rels" USING btree ("parent_id");
  CREATE INDEX "_workshops_v_rels_path_idx" ON "_workshops_v_rels" USING btree ("path");
  CREATE INDEX "_workshops_v_rels_users_id_idx" ON "_workshops_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX "courses_slug_idx" ON "courses" USING btree ("slug");
  CREATE INDEX "courses_photo_idx" ON "courses" USING btree ("photo_id");
  CREATE INDEX "courses_meta_meta_image_idx" ON "courses" USING btree ("meta_image_id");
  CREATE INDEX "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX "courses__status_idx" ON "courses" USING btree ("_status");
  CREATE INDEX "courses_rels_order_idx" ON "courses_rels" USING btree ("order");
  CREATE INDEX "courses_rels_parent_idx" ON "courses_rels" USING btree ("parent_id");
  CREATE INDEX "courses_rels_path_idx" ON "courses_rels" USING btree ("path");
  CREATE INDEX "courses_rels_users_id_idx" ON "courses_rels" USING btree ("users_id");
  CREATE INDEX "_courses_v_parent_idx" ON "_courses_v" USING btree ("parent_id");
  CREATE INDEX "_courses_v_version_version_slug_idx" ON "_courses_v" USING btree ("version_slug");
  CREATE INDEX "_courses_v_version_version_photo_idx" ON "_courses_v" USING btree ("version_photo_id");
  CREATE INDEX "_courses_v_version_meta_version_meta_image_idx" ON "_courses_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_courses_v_version_version_updated_at_idx" ON "_courses_v" USING btree ("version_updated_at");
  CREATE INDEX "_courses_v_version_version_created_at_idx" ON "_courses_v" USING btree ("version_created_at");
  CREATE INDEX "_courses_v_version_version__status_idx" ON "_courses_v" USING btree ("version__status");
  CREATE INDEX "_courses_v_created_at_idx" ON "_courses_v" USING btree ("created_at");
  CREATE INDEX "_courses_v_updated_at_idx" ON "_courses_v" USING btree ("updated_at");
  CREATE INDEX "_courses_v_latest_idx" ON "_courses_v" USING btree ("latest");
  CREATE INDEX "_courses_v_autosave_idx" ON "_courses_v" USING btree ("autosave");
  CREATE INDEX "_courses_v_rels_order_idx" ON "_courses_v_rels" USING btree ("order");
  CREATE INDEX "_courses_v_rels_parent_idx" ON "_courses_v_rels" USING btree ("parent_id");
  CREATE INDEX "_courses_v_rels_path_idx" ON "_courses_v_rels" USING btree ("path");
  CREATE INDEX "_courses_v_rels_users_id_idx" ON "_courses_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX "events_slug_idx" ON "events" USING btree ("slug");
  CREATE INDEX "events_photo_idx" ON "events" USING btree ("photo_id");
  CREATE INDEX "events_meta_meta_image_idx" ON "events" USING btree ("meta_image_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "events__status_idx" ON "events" USING btree ("_status");
  CREATE INDEX "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX "events_rels_users_id_idx" ON "events_rels" USING btree ("users_id");
  CREATE INDEX "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");
  CREATE INDEX "_events_v_version_version_slug_idx" ON "_events_v" USING btree ("version_slug");
  CREATE INDEX "_events_v_version_version_photo_idx" ON "_events_v" USING btree ("version_photo_id");
  CREATE INDEX "_events_v_version_meta_version_meta_image_idx" ON "_events_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");
  CREATE INDEX "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");
  CREATE INDEX "_events_v_version_version__status_idx" ON "_events_v" USING btree ("version__status");
  CREATE INDEX "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");
  CREATE INDEX "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");
  CREATE INDEX "_events_v_latest_idx" ON "_events_v" USING btree ("latest");
  CREATE INDEX "_events_v_autosave_idx" ON "_events_v" USING btree ("autosave");
  CREATE INDEX "_events_v_rels_order_idx" ON "_events_v_rels" USING btree ("order");
  CREATE INDEX "_events_v_rels_parent_idx" ON "_events_v_rels" USING btree ("parent_id");
  CREATE INDEX "_events_v_rels_path_idx" ON "_events_v_rels" USING btree ("path");
  CREATE INDEX "_events_v_rels_users_id_idx" ON "_events_v_rels" USING btree ("users_id");
  CREATE INDEX "what_the_future_details_order_idx" ON "what_the_future_details" USING btree ("_order");
  CREATE INDEX "what_the_future_details_parent_id_idx" ON "what_the_future_details" USING btree ("_parent_id");
  CREATE INDEX "what_the_future_features_order_idx" ON "what_the_future_features" USING btree ("_order");
  CREATE INDEX "what_the_future_features_parent_id_idx" ON "what_the_future_features" USING btree ("_parent_id");
  CREATE INDEX "what_the_future_links_order_idx" ON "what_the_future_links" USING btree ("_order");
  CREATE INDEX "what_the_future_links_parent_id_idx" ON "what_the_future_links" USING btree ("_parent_id");
  CREATE INDEX "what_the_future_image1_idx" ON "what_the_future" USING btree ("image1_id");
  CREATE INDEX "what_the_future_image2_idx" ON "what_the_future" USING btree ("image2_id");
  CREATE INDEX "what_the_future_updated_at_idx" ON "what_the_future" USING btree ("updated_at");
  CREATE INDEX "what_the_future_created_at_idx" ON "what_the_future" USING btree ("created_at");
  CREATE INDEX "what_the_future__status_idx" ON "what_the_future" USING btree ("_status");
  CREATE INDEX "what_the_future_rels_order_idx" ON "what_the_future_rels" USING btree ("order");
  CREATE INDEX "what_the_future_rels_parent_idx" ON "what_the_future_rels" USING btree ("parent_id");
  CREATE INDEX "what_the_future_rels_path_idx" ON "what_the_future_rels" USING btree ("path");
  CREATE INDEX "what_the_future_rels_pages_id_idx" ON "what_the_future_rels" USING btree ("pages_id");
  CREATE INDEX "what_the_future_rels_posts_id_idx" ON "what_the_future_rels" USING btree ("posts_id");
  CREATE INDEX "_what_the_future_v_version_details_order_idx" ON "_what_the_future_v_version_details" USING btree ("_order");
  CREATE INDEX "_what_the_future_v_version_details_parent_id_idx" ON "_what_the_future_v_version_details" USING btree ("_parent_id");
  CREATE INDEX "_what_the_future_v_version_features_order_idx" ON "_what_the_future_v_version_features" USING btree ("_order");
  CREATE INDEX "_what_the_future_v_version_features_parent_id_idx" ON "_what_the_future_v_version_features" USING btree ("_parent_id");
  CREATE INDEX "_what_the_future_v_version_links_order_idx" ON "_what_the_future_v_version_links" USING btree ("_order");
  CREATE INDEX "_what_the_future_v_version_links_parent_id_idx" ON "_what_the_future_v_version_links" USING btree ("_parent_id");
  CREATE INDEX "_what_the_future_v_parent_idx" ON "_what_the_future_v" USING btree ("parent_id");
  CREATE INDEX "_what_the_future_v_version_version_image1_idx" ON "_what_the_future_v" USING btree ("version_image1_id");
  CREATE INDEX "_what_the_future_v_version_version_image2_idx" ON "_what_the_future_v" USING btree ("version_image2_id");
  CREATE INDEX "_what_the_future_v_version_version_updated_at_idx" ON "_what_the_future_v" USING btree ("version_updated_at");
  CREATE INDEX "_what_the_future_v_version_version_created_at_idx" ON "_what_the_future_v" USING btree ("version_created_at");
  CREATE INDEX "_what_the_future_v_version_version__status_idx" ON "_what_the_future_v" USING btree ("version__status");
  CREATE INDEX "_what_the_future_v_created_at_idx" ON "_what_the_future_v" USING btree ("created_at");
  CREATE INDEX "_what_the_future_v_updated_at_idx" ON "_what_the_future_v" USING btree ("updated_at");
  CREATE INDEX "_what_the_future_v_latest_idx" ON "_what_the_future_v" USING btree ("latest");
  CREATE INDEX "_what_the_future_v_autosave_idx" ON "_what_the_future_v" USING btree ("autosave");
  CREATE INDEX "_what_the_future_v_rels_order_idx" ON "_what_the_future_v_rels" USING btree ("order");
  CREATE INDEX "_what_the_future_v_rels_parent_idx" ON "_what_the_future_v_rels" USING btree ("parent_id");
  CREATE INDEX "_what_the_future_v_rels_path_idx" ON "_what_the_future_v_rels" USING btree ("path");
  CREATE INDEX "_what_the_future_v_rels_pages_id_idx" ON "_what_the_future_v_rels" USING btree ("pages_id");
  CREATE INDEX "_what_the_future_v_rels_posts_id_idx" ON "_what_the_future_v_rels" USING btree ("posts_id");
  CREATE INDEX "camps_features_order_idx" ON "camps_features" USING btree ("_order");
  CREATE INDEX "camps_features_parent_id_idx" ON "camps_features" USING btree ("_parent_id");
  CREATE INDEX "camps_links_order_idx" ON "camps_links" USING btree ("_order");
  CREATE INDEX "camps_links_parent_id_idx" ON "camps_links" USING btree ("_parent_id");
  CREATE INDEX "camps_image_idx" ON "camps" USING btree ("image_id");
  CREATE INDEX "camps_updated_at_idx" ON "camps" USING btree ("updated_at");
  CREATE INDEX "camps_created_at_idx" ON "camps" USING btree ("created_at");
  CREATE INDEX "camps__status_idx" ON "camps" USING btree ("_status");
  CREATE INDEX "camps_rels_order_idx" ON "camps_rels" USING btree ("order");
  CREATE INDEX "camps_rels_parent_idx" ON "camps_rels" USING btree ("parent_id");
  CREATE INDEX "camps_rels_path_idx" ON "camps_rels" USING btree ("path");
  CREATE INDEX "camps_rels_pages_id_idx" ON "camps_rels" USING btree ("pages_id");
  CREATE INDEX "camps_rels_posts_id_idx" ON "camps_rels" USING btree ("posts_id");
  CREATE INDEX "_camps_v_version_features_order_idx" ON "_camps_v_version_features" USING btree ("_order");
  CREATE INDEX "_camps_v_version_features_parent_id_idx" ON "_camps_v_version_features" USING btree ("_parent_id");
  CREATE INDEX "_camps_v_version_links_order_idx" ON "_camps_v_version_links" USING btree ("_order");
  CREATE INDEX "_camps_v_version_links_parent_id_idx" ON "_camps_v_version_links" USING btree ("_parent_id");
  CREATE INDEX "_camps_v_parent_idx" ON "_camps_v" USING btree ("parent_id");
  CREATE INDEX "_camps_v_version_version_image_idx" ON "_camps_v" USING btree ("version_image_id");
  CREATE INDEX "_camps_v_version_version_updated_at_idx" ON "_camps_v" USING btree ("version_updated_at");
  CREATE INDEX "_camps_v_version_version_created_at_idx" ON "_camps_v" USING btree ("version_created_at");
  CREATE INDEX "_camps_v_version_version__status_idx" ON "_camps_v" USING btree ("version__status");
  CREATE INDEX "_camps_v_created_at_idx" ON "_camps_v" USING btree ("created_at");
  CREATE INDEX "_camps_v_updated_at_idx" ON "_camps_v" USING btree ("updated_at");
  CREATE INDEX "_camps_v_latest_idx" ON "_camps_v" USING btree ("latest");
  CREATE INDEX "_camps_v_autosave_idx" ON "_camps_v" USING btree ("autosave");
  CREATE INDEX "_camps_v_rels_order_idx" ON "_camps_v_rels" USING btree ("order");
  CREATE INDEX "_camps_v_rels_parent_idx" ON "_camps_v_rels" USING btree ("parent_id");
  CREATE INDEX "_camps_v_rels_path_idx" ON "_camps_v_rels" USING btree ("path");
  CREATE INDEX "_camps_v_rels_pages_id_idx" ON "_camps_v_rels" USING btree ("pages_id");
  CREATE INDEX "_camps_v_rels_posts_id_idx" ON "_camps_v_rels" USING btree ("posts_id");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "forms_rels_order_idx" ON "forms_rels" USING btree ("order");
  CREATE INDEX "forms_rels_parent_idx" ON "forms_rels" USING btree ("parent_id");
  CREATE INDEX "forms_rels_path_idx" ON "forms_rels" USING btree ("path");
  CREATE INDEX "forms_rels_guided_workshops_id_idx" ON "forms_rels" USING btree ("guided_workshops_id");
  CREATE INDEX "forms_rels_guided_courses_id_idx" ON "forms_rels" USING btree ("guided_courses_id");
  CREATE INDEX "forms_rels_guided_bootcamps_id_idx" ON "forms_rels" USING btree ("guided_bootcamps_id");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "form_submissions_rels_order_idx" ON "form_submissions_rels" USING btree ("order");
  CREATE INDEX "form_submissions_rels_parent_idx" ON "form_submissions_rels" USING btree ("parent_id");
  CREATE INDEX "form_submissions_rels_path_idx" ON "form_submissions_rels" USING btree ("path");
  CREATE INDEX "form_submissions_rels_guided_workshops_id_idx" ON "form_submissions_rels" USING btree ("guided_workshops_id");
  CREATE INDEX "form_submissions_rels_guided_courses_id_idx" ON "form_submissions_rels" USING btree ("guided_courses_id");
  CREATE INDEX "form_submissions_rels_guided_bootcamps_id_idx" ON "form_submissions_rels" USING btree ("guided_bootcamps_id");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX "payload_mcp_api_keys_user_idx" ON "payload_mcp_api_keys" USING btree ("user_id");
  CREATE INDEX "payload_mcp_api_keys_updated_at_idx" ON "payload_mcp_api_keys" USING btree ("updated_at");
  CREATE INDEX "payload_mcp_api_keys_created_at_idx" ON "payload_mcp_api_keys" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_folders_folder_type_order_idx" ON "payload_folders_folder_type" USING btree ("order");
  CREATE INDEX "payload_folders_folder_type_parent_idx" ON "payload_folders_folder_type" USING btree ("parent_id");
  CREATE INDEX "payload_folders_name_idx" ON "payload_folders" USING btree ("name");
  CREATE INDEX "payload_folders_folder_idx" ON "payload_folders" USING btree ("folder_id");
  CREATE INDEX "payload_folders_updated_at_idx" ON "payload_folders" USING btree ("updated_at");
  CREATE INDEX "payload_folders_created_at_idx" ON "payload_folders" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_guided_workshops_id_idx" ON "payload_locked_documents_rels" USING btree ("guided_workshops_id");
  CREATE INDEX "payload_locked_documents_rels_guided_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("guided_courses_id");
  CREATE INDEX "payload_locked_documents_rels_guided_bootcamps_id_idx" ON "payload_locked_documents_rels" USING btree ("guided_bootcamps_id");
  CREATE INDEX "payload_locked_documents_rels_autonomous_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("autonomous_groups_id");
  CREATE INDEX "payload_locked_documents_rels_workshops_id_idx" ON "payload_locked_documents_rels" USING btree ("workshops_id");
  CREATE INDEX "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_what_the_future_id_idx" ON "payload_locked_documents_rels" USING btree ("what_the_future_id");
  CREATE INDEX "payload_locked_documents_rels_camps_id_idx" ON "payload_locked_documents_rels" USING btree ("camps_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_payload_mcp_api_keys_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_mcp_api_keys_id");
  CREATE INDEX "payload_locked_documents_rels_payload_folders_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_folders_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_rels_payload_mcp_api_keys_id_idx" ON "payload_preferences_rels" USING btree ("payload_mcp_api_keys_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_idx" ON "footer" USING btree ("logo_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "socials_platforms_order_idx" ON "socials_platforms" USING btree ("_order");
  CREATE INDEX "socials_platforms_parent_id_idx" ON "socials_platforms" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_high_impact_links" CASCADE;
  DROP TABLE "pages_hero_features" CASCADE;
  DROP TABLE "pages_hero_stats" CASCADE;
  DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_donate_amounts" CASCADE;
  DROP TABLE "pages_blocks_donate_links" CASCADE;
  DROP TABLE "pages_blocks_donate" CASCADE;
  DROP TABLE "pages_blocks_donate_story" CASCADE;
  DROP TABLE "pages_blocks_present_courses_links" CASCADE;
  DROP TABLE "pages_blocks_present_courses_modules_items" CASCADE;
  DROP TABLE "pages_blocks_present_courses_modules" CASCADE;
  DROP TABLE "pages_blocks_present_courses" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "pages_blocks_rules_and_values_values" CASCADE;
  DROP TABLE "pages_blocks_rules_and_values_rules" CASCADE;
  DROP TABLE "pages_blocks_rules_and_values" CASCADE;
  DROP TABLE "pages_blocks_about_links" CASCADE;
  DROP TABLE "pages_blocks_about" CASCADE;
  DROP TABLE "pages_blocks_guided_features" CASCADE;
  DROP TABLE "pages_blocks_guided" CASCADE;
  DROP TABLE "gl_module_labels" CASCADE;
  DROP TABLE "pages_blocks_guided_learning_by_year" CASCADE;
  DROP TABLE "pages_blocks_faq_categories_questions" CASCADE;
  DROP TABLE "pages_blocks_faq_categories" CASCADE;
  DROP TABLE "pages_blocks_faq_links" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_playground_links" CASCADE;
  DROP TABLE "pages_blocks_playground" CASCADE;
  DROP TABLE "pages_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_playground_journey_areas_links" CASCADE;
  DROP TABLE "pages_blocks_playground_journey_areas" CASCADE;
  DROP TABLE "pages_blocks_playground_journey" CASCADE;
  DROP TABLE "pages_blocks_map" CASCADE;
  DROP TABLE "pages_blocks_guided_examples_links" CASCADE;
  DROP TABLE "pages_blocks_guided_examples" CASCADE;
  DROP TABLE "pages_blocks_playground_examples_links" CASCADE;
  DROP TABLE "pages_blocks_playground_examples" CASCADE;
  DROP TABLE "pages_blocks_teachers_teachers" CASCADE;
  DROP TABLE "pages_blocks_teachers_links" CASCADE;
  DROP TABLE "pages_blocks_teachers" CASCADE;
  DROP TABLE "pages_blocks_teacher" CASCADE;
  DROP TABLE "pages_blocks_about_story_images" CASCADE;
  DROP TABLE "pages_blocks_about_story_links" CASCADE;
  DROP TABLE "pages_blocks_about_story" CASCADE;
  DROP TABLE "pages_blocks_camps" CASCADE;
  DROP TABLE "pages_blocks_guided_courses_courses_links" CASCADE;
  DROP TABLE "pages_blocks_guided_courses_courses" CASCADE;
  DROP TABLE "pages_blocks_guided_courses_links" CASCADE;
  DROP TABLE "pages_blocks_guided_courses" CASCADE;
  DROP TABLE "pages_blocks_objectives_objectives" CASCADE;
  DROP TABLE "pages_blocks_objectives_links" CASCADE;
  DROP TABLE "pages_blocks_objectives" CASCADE;
  DROP TABLE "pages_blocks_playground_showcase_tabs" CASCADE;
  DROP TABLE "pages_blocks_playground_showcase_links" CASCADE;
  DROP TABLE "pages_blocks_playground_showcase" CASCADE;
  DROP TABLE "pages_blocks_spinning_top_elements" CASCADE;
  DROP TABLE "pages_blocks_spinning_top_links" CASCADE;
  DROP TABLE "pages_blocks_spinning_top" CASCADE;
  DROP TABLE "pages_blocks_what_the_future" CASCADE;
  DROP TABLE "pages_blocks_why_support_highlights" CASCADE;
  DROP TABLE "pages_blocks_why_support_links" CASCADE;
  DROP TABLE "pages_blocks_why_support" CASCADE;
  DROP TABLE "pages_blocks_donation_methods_methods_bullets" CASCADE;
  DROP TABLE "pages_blocks_donation_methods_methods" CASCADE;
  DROP TABLE "pages_blocks_donation_methods_corporate_links" CASCADE;
  DROP TABLE "pages_blocks_donation_methods" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_texts" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_high_impact_links" CASCADE;
  DROP TABLE "_pages_v_version_hero_features" CASCADE;
  DROP TABLE "_pages_v_version_hero_stats" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_donate_amounts" CASCADE;
  DROP TABLE "_pages_v_blocks_donate_links" CASCADE;
  DROP TABLE "_pages_v_blocks_donate" CASCADE;
  DROP TABLE "_pages_v_blocks_donate_story" CASCADE;
  DROP TABLE "_pages_v_blocks_present_courses_links" CASCADE;
  DROP TABLE "_pages_v_blocks_present_courses_modules_items" CASCADE;
  DROP TABLE "_pages_v_blocks_present_courses_modules" CASCADE;
  DROP TABLE "_pages_v_blocks_present_courses" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_rules_and_values_values" CASCADE;
  DROP TABLE "_pages_v_blocks_rules_and_values_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_rules_and_values" CASCADE;
  DROP TABLE "_pages_v_blocks_about_links" CASCADE;
  DROP TABLE "_pages_v_blocks_about" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_features" CASCADE;
  DROP TABLE "_pages_v_blocks_guided" CASCADE;
  DROP TABLE "_gl_module_labels_v" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_learning_by_year" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_categories_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_categories" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_links" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_links" CASCADE;
  DROP TABLE "_pages_v_blocks_playground" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_journey_areas_links" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_journey_areas" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_journey" CASCADE;
  DROP TABLE "_pages_v_blocks_map" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_examples_links" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_examples" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_examples_links" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_examples" CASCADE;
  DROP TABLE "_pages_v_blocks_teachers_teachers" CASCADE;
  DROP TABLE "_pages_v_blocks_teachers_links" CASCADE;
  DROP TABLE "_pages_v_blocks_teachers" CASCADE;
  DROP TABLE "_pages_v_blocks_teacher" CASCADE;
  DROP TABLE "_pages_v_blocks_about_story_images" CASCADE;
  DROP TABLE "_pages_v_blocks_about_story_links" CASCADE;
  DROP TABLE "_pages_v_blocks_about_story" CASCADE;
  DROP TABLE "_pages_v_blocks_camps" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_courses_courses_links" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_courses_courses" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_courses_links" CASCADE;
  DROP TABLE "_pages_v_blocks_guided_courses" CASCADE;
  DROP TABLE "_pages_v_blocks_objectives_objectives" CASCADE;
  DROP TABLE "_pages_v_blocks_objectives_links" CASCADE;
  DROP TABLE "_pages_v_blocks_objectives" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_showcase_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_showcase_links" CASCADE;
  DROP TABLE "_pages_v_blocks_playground_showcase" CASCADE;
  DROP TABLE "_pages_v_blocks_spinning_top_elements" CASCADE;
  DROP TABLE "_pages_v_blocks_spinning_top_links" CASCADE;
  DROP TABLE "_pages_v_blocks_spinning_top" CASCADE;
  DROP TABLE "_pages_v_blocks_what_the_future" CASCADE;
  DROP TABLE "_pages_v_blocks_why_support_highlights" CASCADE;
  DROP TABLE "_pages_v_blocks_why_support_links" CASCADE;
  DROP TABLE "_pages_v_blocks_why_support" CASCADE;
  DROP TABLE "_pages_v_blocks_donation_methods_methods_bullets" CASCADE;
  DROP TABLE "_pages_v_blocks_donation_methods_methods" CASCADE;
  DROP TABLE "_pages_v_blocks_donation_methods_corporate_links" CASCADE;
  DROP TABLE "_pages_v_blocks_donation_methods" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_texts" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "guided_workshops_teachers" CASCADE;
  DROP TABLE "guided_workshops_blocks_content_columns" CASCADE;
  DROP TABLE "guided_workshops_blocks_content" CASCADE;
  DROP TABLE "guided_workshops_blocks_media_block" CASCADE;
  DROP TABLE "guided_workshops_blocks_cta_links" CASCADE;
  DROP TABLE "guided_workshops_blocks_cta" CASCADE;
  DROP TABLE "guided_workshops_blocks_teacher" CASCADE;
  DROP TABLE "guided_workshops" CASCADE;
  DROP TABLE "guided_workshops_rels" CASCADE;
  DROP TABLE "_guided_workshops_v_version_teachers" CASCADE;
  DROP TABLE "_guided_workshops_v_blocks_content_columns" CASCADE;
  DROP TABLE "_guided_workshops_v_blocks_content" CASCADE;
  DROP TABLE "_guided_workshops_v_blocks_media_block" CASCADE;
  DROP TABLE "_guided_workshops_v_blocks_cta_links" CASCADE;
  DROP TABLE "_guided_workshops_v_blocks_cta" CASCADE;
  DROP TABLE "_guided_workshops_v_blocks_teacher" CASCADE;
  DROP TABLE "_guided_workshops_v" CASCADE;
  DROP TABLE "_guided_workshops_v_rels" CASCADE;
  DROP TABLE "guided_courses_teachers" CASCADE;
  DROP TABLE "guided_courses_blocks_content_columns" CASCADE;
  DROP TABLE "guided_courses_blocks_content" CASCADE;
  DROP TABLE "guided_courses_blocks_media_block" CASCADE;
  DROP TABLE "guided_courses_blocks_cta_links" CASCADE;
  DROP TABLE "guided_courses_blocks_cta" CASCADE;
  DROP TABLE "guided_courses_blocks_teacher" CASCADE;
  DROP TABLE "guided_courses" CASCADE;
  DROP TABLE "guided_courses_rels" CASCADE;
  DROP TABLE "_guided_courses_v_version_teachers" CASCADE;
  DROP TABLE "_guided_courses_v_blocks_content_columns" CASCADE;
  DROP TABLE "_guided_courses_v_blocks_content" CASCADE;
  DROP TABLE "_guided_courses_v_blocks_media_block" CASCADE;
  DROP TABLE "_guided_courses_v_blocks_cta_links" CASCADE;
  DROP TABLE "_guided_courses_v_blocks_cta" CASCADE;
  DROP TABLE "_guided_courses_v_blocks_teacher" CASCADE;
  DROP TABLE "_guided_courses_v" CASCADE;
  DROP TABLE "_guided_courses_v_rels" CASCADE;
  DROP TABLE "guided_bootcamps_teachers" CASCADE;
  DROP TABLE "guided_bootcamps_blocks_content_columns" CASCADE;
  DROP TABLE "guided_bootcamps_blocks_content" CASCADE;
  DROP TABLE "guided_bootcamps_blocks_media_block" CASCADE;
  DROP TABLE "guided_bootcamps_blocks_cta_links" CASCADE;
  DROP TABLE "guided_bootcamps_blocks_cta" CASCADE;
  DROP TABLE "guided_bootcamps_blocks_teacher" CASCADE;
  DROP TABLE "guided_bootcamps" CASCADE;
  DROP TABLE "guided_bootcamps_rels" CASCADE;
  DROP TABLE "_guided_bootcamps_v_version_teachers" CASCADE;
  DROP TABLE "_guided_bootcamps_v_blocks_content_columns" CASCADE;
  DROP TABLE "_guided_bootcamps_v_blocks_content" CASCADE;
  DROP TABLE "_guided_bootcamps_v_blocks_media_block" CASCADE;
  DROP TABLE "_guided_bootcamps_v_blocks_cta_links" CASCADE;
  DROP TABLE "_guided_bootcamps_v_blocks_cta" CASCADE;
  DROP TABLE "_guided_bootcamps_v_blocks_teacher" CASCADE;
  DROP TABLE "_guided_bootcamps_v" CASCADE;
  DROP TABLE "_guided_bootcamps_v_rels" CASCADE;
  DROP TABLE "autonomous_groups" CASCADE;
  DROP TABLE "autonomous_groups_rels" CASCADE;
  DROP TABLE "_autonomous_groups_v" CASCADE;
  DROP TABLE "_autonomous_groups_v_rels" CASCADE;
  DROP TABLE "workshops" CASCADE;
  DROP TABLE "workshops_rels" CASCADE;
  DROP TABLE "_workshops_v" CASCADE;
  DROP TABLE "_workshops_v_rels" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "courses_rels" CASCADE;
  DROP TABLE "_courses_v" CASCADE;
  DROP TABLE "_courses_v_rels" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "_events_v" CASCADE;
  DROP TABLE "_events_v_rels" CASCADE;
  DROP TABLE "what_the_future_details" CASCADE;
  DROP TABLE "what_the_future_features" CASCADE;
  DROP TABLE "what_the_future_links" CASCADE;
  DROP TABLE "what_the_future" CASCADE;
  DROP TABLE "what_the_future_rels" CASCADE;
  DROP TABLE "_what_the_future_v_version_details" CASCADE;
  DROP TABLE "_what_the_future_v_version_features" CASCADE;
  DROP TABLE "_what_the_future_v_version_links" CASCADE;
  DROP TABLE "_what_the_future_v" CASCADE;
  DROP TABLE "_what_the_future_v_rels" CASCADE;
  DROP TABLE "camps_features" CASCADE;
  DROP TABLE "camps_links" CASCADE;
  DROP TABLE "camps" CASCADE;
  DROP TABLE "camps_rels" CASCADE;
  DROP TABLE "_camps_v_version_features" CASCADE;
  DROP TABLE "_camps_v_version_links" CASCADE;
  DROP TABLE "_camps_v" CASCADE;
  DROP TABLE "_camps_v_rels" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_rels" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "form_submissions_rels" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_mcp_api_keys" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_folders_folder_type" CASCADE;
  DROP TABLE "payload_folders" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "socials_platforms" CASCADE;
  DROP TABLE "socials" CASCADE;
  DROP TYPE "public"."enum_pages_hero_high_impact_links_link_type";
  DROP TYPE "public"."enum_pages_hero_features_icon";
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_alignment";
  DROP TYPE "public"."enum_pages_blocks_donate_amounts_link_type";
  DROP TYPE "public"."enum_pages_blocks_donate_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_donate_variant";
  DROP TYPE "public"."enum_pages_blocks_donate_alignment";
  DROP TYPE "public"."enum_pages_blocks_present_courses_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_present_courses_modules_items_icon";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_rules_and_values_values_icon";
  DROP TYPE "public"."enum_pages_blocks_rules_and_values_values_color";
  DROP TYPE "public"."enum_pages_blocks_about_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_guided_features_icon";
  DROP TYPE "public"."enum_pages_blocks_guided_features_icon_color";
  DROP TYPE "public"."enum_pages_blocks_guided_features_icon_rotation";
  DROP TYPE "public"."enum_gl_module_labels_module_value";
  DROP TYPE "public"."enum_gl_module_labels_color";
  DROP TYPE "public"."enum_pages_blocks_faq_categories_icon";
  DROP TYPE "public"."enum_pages_blocks_faq_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_playground_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_playground_journey_areas_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_playground_journey_areas_color";
  DROP TYPE "public"."enum_pages_blocks_guided_examples_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_playground_examples_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_teachers_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_about_story_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_guided_courses_courses_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_guided_courses_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_objectives_objectives_icon";
  DROP TYPE "public"."enum_pages_blocks_objectives_objectives_color";
  DROP TYPE "public"."enum_pages_blocks_objectives_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_playground_showcase_tabs_source";
  DROP TYPE "public"."enum_pages_blocks_playground_showcase_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_spinning_top_elements_color";
  DROP TYPE "public"."enum_pages_blocks_spinning_top_elements_link_type";
  DROP TYPE "public"."enum_pages_blocks_spinning_top_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_why_support_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_donation_methods_methods_icon";
  DROP TYPE "public"."enum_pages_blocks_donation_methods_methods_variant";
  DROP TYPE "public"."enum_pages_blocks_donation_methods_methods_link_type";
  DROP TYPE "public"."enum_pages_blocks_donation_methods_corporate_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_donation_methods_corporate_icon";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_hero_image_position";
  DROP TYPE "public"."enum_pages_hero_background_color";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_high_impact_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_features_icon";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_donate_amounts_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_donate_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_donate_variant";
  DROP TYPE "public"."enum__pages_v_blocks_donate_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_present_courses_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_present_courses_modules_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_rules_and_values_values_icon";
  DROP TYPE "public"."enum__pages_v_blocks_rules_and_values_values_color";
  DROP TYPE "public"."enum__pages_v_blocks_about_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_guided_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_guided_features_icon_color";
  DROP TYPE "public"."enum__pages_v_blocks_guided_features_icon_rotation";
  DROP TYPE "public"."enum__gl_module_labels_v_module_value";
  DROP TYPE "public"."enum__gl_module_labels_v_color";
  DROP TYPE "public"."enum__pages_v_blocks_faq_categories_icon";
  DROP TYPE "public"."enum__pages_v_blocks_faq_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_playground_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_playground_journey_areas_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_playground_journey_areas_color";
  DROP TYPE "public"."enum__pages_v_blocks_guided_examples_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_playground_examples_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_teachers_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_about_story_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_guided_courses_courses_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_guided_courses_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_objectives_objectives_icon";
  DROP TYPE "public"."enum__pages_v_blocks_objectives_objectives_color";
  DROP TYPE "public"."enum__pages_v_blocks_objectives_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_playground_showcase_tabs_source";
  DROP TYPE "public"."enum__pages_v_blocks_playground_showcase_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_spinning_top_elements_color";
  DROP TYPE "public"."enum__pages_v_blocks_spinning_top_elements_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_spinning_top_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_why_support_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_donation_methods_methods_icon";
  DROP TYPE "public"."enum__pages_v_blocks_donation_methods_methods_variant";
  DROP TYPE "public"."enum__pages_v_blocks_donation_methods_methods_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_donation_methods_corporate_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_donation_methods_corporate_icon";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_image_position";
  DROP TYPE "public"."enum__pages_v_version_hero_background_color";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_guided_workshops_blocks_content_columns_size";
  DROP TYPE "public"."enum_guided_workshops_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_guided_workshops_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_guided_workshops_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_guided_workshops_blocks_cta_variant";
  DROP TYPE "public"."enum_guided_workshops_blocks_cta_alignment";
  DROP TYPE "public"."enum_guided_workshops_module";
  DROP TYPE "public"."enum_guided_workshops_status";
  DROP TYPE "public"."enum__guided_workshops_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__guided_workshops_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__guided_workshops_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__guided_workshops_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__guided_workshops_v_blocks_cta_variant";
  DROP TYPE "public"."enum__guided_workshops_v_blocks_cta_alignment";
  DROP TYPE "public"."enum__guided_workshops_v_version_module";
  DROP TYPE "public"."enum__guided_workshops_v_version_status";
  DROP TYPE "public"."enum_guided_courses_blocks_content_columns_size";
  DROP TYPE "public"."enum_guided_courses_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_guided_courses_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_guided_courses_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_guided_courses_blocks_cta_variant";
  DROP TYPE "public"."enum_guided_courses_blocks_cta_alignment";
  DROP TYPE "public"."enum_guided_courses_module";
  DROP TYPE "public"."enum_guided_courses_status";
  DROP TYPE "public"."enum__guided_courses_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__guided_courses_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__guided_courses_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__guided_courses_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__guided_courses_v_blocks_cta_variant";
  DROP TYPE "public"."enum__guided_courses_v_blocks_cta_alignment";
  DROP TYPE "public"."enum__guided_courses_v_version_module";
  DROP TYPE "public"."enum__guided_courses_v_version_status";
  DROP TYPE "public"."enum_guided_bootcamps_blocks_content_columns_size";
  DROP TYPE "public"."enum_guided_bootcamps_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_guided_bootcamps_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_guided_bootcamps_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_guided_bootcamps_blocks_cta_variant";
  DROP TYPE "public"."enum_guided_bootcamps_blocks_cta_alignment";
  DROP TYPE "public"."enum_guided_bootcamps_module";
  DROP TYPE "public"."enum_guided_bootcamps_status";
  DROP TYPE "public"."enum__guided_bootcamps_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__guided_bootcamps_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__guided_bootcamps_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__guided_bootcamps_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__guided_bootcamps_v_blocks_cta_variant";
  DROP TYPE "public"."enum__guided_bootcamps_v_blocks_cta_alignment";
  DROP TYPE "public"."enum__guided_bootcamps_v_version_module";
  DROP TYPE "public"."enum__guided_bootcamps_v_version_status";
  DROP TYPE "public"."enum_autonomous_groups_status";
  DROP TYPE "public"."enum__autonomous_groups_v_version_status";
  DROP TYPE "public"."enum_workshops_status";
  DROP TYPE "public"."enum__workshops_v_version_status";
  DROP TYPE "public"."enum_courses_status";
  DROP TYPE "public"."enum__courses_v_version_status";
  DROP TYPE "public"."enum_events_status";
  DROP TYPE "public"."enum__events_v_version_status";
  DROP TYPE "public"."enum_what_the_future_details_icon";
  DROP TYPE "public"."enum_what_the_future_links_link_type";
  DROP TYPE "public"."enum_what_the_future_status";
  DROP TYPE "public"."enum__what_the_future_v_version_details_icon";
  DROP TYPE "public"."enum__what_the_future_v_version_links_link_type";
  DROP TYPE "public"."enum__what_the_future_v_version_status";
  DROP TYPE "public"."enum_camps_features_icon";
  DROP TYPE "public"."enum_camps_links_link_type";
  DROP TYPE "public"."enum_camps_status";
  DROP TYPE "public"."enum__camps_v_version_features_icon";
  DROP TYPE "public"."enum__camps_v_version_links_link_type";
  DROP TYPE "public"."enum__camps_v_version_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_folders_folder_type";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_footer_columns_links_link_type";
  DROP TYPE "public"."enum_socials_platforms_icon";`)
}
