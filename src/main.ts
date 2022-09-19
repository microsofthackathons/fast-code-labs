import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
} from "@microsoft/fast-components";

provideFASTDesignSystem().register(fastCard(), fastButton());
