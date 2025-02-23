export type FontOptions =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800;

export type FontFamily = 'inter';

export const AppFonts: Record<FontFamily, Record<FontOptions, string>> = {
  inter: {
    100: 'InterThin',
    200: 'InterExtraLight',
    300: 'InterLight',
    400: 'InterRegular',
    500: 'InterMedium',
    600: 'InterSemiBold',
    700: 'InterBold',
    800: 'InterExtraBold',
  },
};
