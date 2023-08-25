type Theme = {
    meta: {
        name: 'dark'
    }
    color: {
        action: {
            primary: '#a060f0ff'
            primary_hover: '#a96ff1ff'
            primary_pressed: '#b37ff3ff'
            primary_depressed: '#d8bcf8ff'
            default: '#080e12ff'
            default_hover: '#151f28ff'
            default_pressed: '#212c36ff'
            default_depressed: '#728394ff'
            critical: '#e74836ff'
            critical_hover: '#ea5a49ff'
            critical_pressed: '#ed6c5dff'
            critical_depressed: '#f9b4aaff'
        }
        border: {
            default: '#5b6a79ff'
            subdued: '#2c3843ff'
            hover: '#4f5e6cff'
            depressed: '#99a6b2ff'
            error: '#be3629ff'
            error_subdued: '#801b14ff'
            success: '#168059ff'
            success_subdued: '#0f5137ff'
            warning: '#ab4d00ff'
            warning_subdued: '#713001ff'
            highlight: '#1a67c3ff'
            highlight_subdued: '#0d4280ff'
        }
        content: {
            default: '#d9dfe3ff'
            subdued: '#8c9aa8ff'
            inverse: '#080e12ff'
            error: '#ea5a49ff'
            success: '#2caa7bff'
            warning: '#d77015ff'
            highlight: '#368df1ff'
        }
        disabled: {
            surface: '#151f28ff'
            content: '#5b6a79ff'
            border: '#212c36ff'
        }
        elevation: {
            '100': {
                '0': '#080e12ff'
                '1': '#ffffff03'
            }
            '200': {
                '0': '#080e12ff'
                '1': '#ffffff05'
            }
            '300': {
                '0': '#080e12ff'
                '1': '#ffffff08'
            }
            '400': {
                '0': '#080e12ff'
                '1': '#ffffff0a'
            }
            '500': {
                '0': '#080e12ff'
                '1': '#ffffff0d'
            }
        }
        focused: {
            default: '#1a67c3ff'
        }
        surface: {
            default: '#080e12ff'
            subdued: '#151f28ff'
            primary: '#452178ff'
            primary_subdued: '#260c50ff'
            warning: '#5e2601ff'
            warning_subdued: '#371201ff'
            error: '#6b120eff'
            error_subdued: '#420000ff'
            success: '#0d412cff'
            highlight: '#09366aff'
            highlight_subdued: '#001d3dff'
        }
        static: {
            light: {
                '4': '#f9fafa0a'
                '8': '#f9fafa14'
                '12': '#f9fafa1f'
                '16': '#f9fafa29'
                '20': '#f9fafa33'
                '24': '#f9fafa3d'
                '28': '#f9fafa47'
                '32': '#f9fafa52'
                '36': '#f9fafa5c'
                '40': '#f9fafa66'
                '44': '#f9fafa70'
                '48': '#f9fafa7a'
                '52': '#f9fafa85'
                '56': '#f9fafa8f'
                '60': '#f9fafa99'
                '64': '#f9fafaa3'
                '68': '#f9fafaad'
                '72': '#f9fafab8'
                '76': '#f9fafac2'
                '80': '#f9fafacc'
                '84': '#f9fafad6'
                '88': '#f9fafae0'
                '92': '#f9fafaeb'
                '96': '#f9fafaf5'
                '100': '#f9fafaff'
            }
            dark: {
                '4': '#080e120a'
                '8': '#080e1214'
                '12': '#080e121f'
                '16': '#080e1229'
                '20': '#080e1233'
                '24': '#080e123d'
                '28': '#080e1247'
                '32': '#080e1252'
                '36': '#080e125c'
                '40': '#080e1266'
                '44': '#080e1270'
                '48': '#080e127a'
                '52': '#080e1285'
                '56': '#080e128f'
                '60': '#080e1299'
                '64': '#080e12a3'
                '68': '#080e12ad'
                '72': '#080e12b8'
                '76': '#080e12c2'
                '80': '#080e12cc'
                '84': '#080e12d6'
                '88': '#080e12e0'
                '92': '#080e12eb'
                '96': '#080e12f5'
                '100': '#080e12ff'
            }
        }
    }
    effect: {
        elevation_100: {
            '0': {
                shadow_type: 'dropShadow'
                radius: 1
                color: '#00000024'
                offset_x: 0
                offset_y: 1
                spread: 0
            }
            '1': {
                shadow_type: 'dropShadow'
                radius: 1
                color: '#0000001f'
                offset_x: 0
                offset_y: 2
                spread: -1
            }
            '2': {
                shadow_type: 'dropShadow'
                radius: 3
                color: '#00000033'
                offset_x: 0
                offset_y: 1
                spread: 0
            }
        }
        elevation_200: {
            '0': {
                shadow_type: 'dropShadow'
                radius: 2
                color: '#00000024'
                offset_x: 0
                offset_y: 2
                spread: 0
            }
            '1': {
                shadow_type: 'dropShadow'
                radius: 1
                color: '#0000001f'
                offset_x: 0
                offset_y: 3
                spread: -2
            }
            '2': {
                shadow_type: 'dropShadow'
                radius: 5
                color: '#00000033'
                offset_x: 0
                offset_y: 1
                spread: 0
            }
        }
        elevation_300: {
            '0': {
                shadow_type: 'dropShadow'
                radius: 4
                color: '#00000024'
                offset_x: 0
                offset_y: 3
                spread: 0
            }
            '1': {
                shadow_type: 'dropShadow'
                radius: 3
                color: '#0000001f'
                offset_x: 0
                offset_y: 3
                spread: -2
            }
            '2': {
                shadow_type: 'dropShadow'
                radius: 8
                color: '#00000033'
                offset_x: 0
                offset_y: 1
                spread: 0
            }
        }
        elevation_400: {
            '0': {
                shadow_type: 'dropShadow'
                radius: 5
                color: '#00000024'
                offset_x: 0
                offset_y: 4
                spread: 0
            }
            '1': {
                shadow_type: 'dropShadow'
                radius: 10
                color: '#0000001f'
                offset_x: 0
                offset_y: 1
                spread: 0
            }
            '2': {
                shadow_type: 'dropShadow'
                radius: 4
                color: '#00000033'
                offset_x: 0
                offset_y: 2
                spread: -1
            }
        }
        elevation_500: {
            '0': {
                shadow_type: 'dropShadow'
                radius: 10
                color: '#00000024'
                offset_x: 0
                offset_y: 6
                spread: 0
            }
            '1': {
                shadow_type: 'dropShadow'
                radius: 18
                color: '#0000001f'
                offset_x: 0
                offset_y: 1
                spread: 0
            }
            '2': {
                shadow_type: 'dropShadow'
                radius: 5
                color: '#00000033'
                offset_x: 0
                offset_y: 3
                spread: -1
            }
        }
    }
    typography: {
        content: {
            lg: {
                font_size: 18
                text_decoration: 'none'
                font_family: 'Dosis'
                font_weight: 400
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0.9
                line_height: 28
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            md: {
                font_size: 16
                text_decoration: 'none'
                font_family: 'Dosis'
                font_weight: 400
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0.8
                line_height: 24
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            sm: {
                font_size: 14
                text_decoration: 'none'
                font_family: 'Dosis'
                font_weight: 400
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0.7
                line_height: 20
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
        }
        detail: {
            xl: {
                regular: {
                    font_size: 20
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 400
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 1
                    line_height: 32
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'none'
                }
                bold: {
                    font_size: 20
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 600
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 1
                    line_height: 32
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'uppercase'
                }
            }
            lg: {
                regular: {
                    font_size: 18
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 400
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.9
                    line_height: 28
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'none'
                }
                bold: {
                    font_size: 18
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 600
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.9
                    line_height: 28
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'uppercase'
                }
            }
            md: {
                regular: {
                    font_size: 16
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 400
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.8
                    line_height: 24
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'none'
                }
                bold: {
                    font_size: 16
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 600
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.8
                    line_height: 24
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'uppercase'
                }
            }
            sm: {
                regular: {
                    font_size: 14
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 400
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.7
                    line_height: 20
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'none'
                }
                bold: {
                    font_size: 14
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 600
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.7
                    line_height: 20
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'uppercase'
                }
            }
            xs: {
                regular: {
                    font_size: 12
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 400
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.6
                    line_height: 16
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'none'
                }
                bold: {
                    font_size: 12
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 600
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.6
                    line_height: 16
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'uppercase'
                }
            }
            xxs: {
                regular: {
                    font_size: 10
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 400
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.5
                    line_height: 16
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'none'
                }
                bold: {
                    font_size: 10
                    text_decoration: 'none'
                    font_family: 'Dosis'
                    font_weight: 600
                    font_style: 'normal'
                    font_stretch: 'normal'
                    letter_spacing: 0.5
                    line_height: 16
                    paragraph_indent: 0
                    paragraph_spacing: 0
                    text_case: 'uppercase'
                }
            }
        }
        display: {
            xl: {
                font_size: 72
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 80
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            lg: {
                font_size: 64
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 72
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            md: {
                font_size: 56
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 64
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            sm: {
                font_size: 48
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 56
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            xs: {
                font_size: 40
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 48
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
        }
        heading: {
            xxxl: {
                font_size: 48
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 52
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            xxl: {
                font_size: 40
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 44
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            xl: {
                font_size: 36
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 40
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            lg: {
                font_size: 32
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 36
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            md: {
                font_size: 28
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 32
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            sm: {
                font_size: 24
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 28
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            xs: {
                font_size: 20
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 24
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
            xxs: {
                font_size: 18
                text_decoration: 'none'
                font_family: 'Titillium Web'
                font_weight: 600
                font_style: 'normal'
                font_stretch: 'normal'
                letter_spacing: 0
                line_height: 24
                paragraph_indent: 0
                paragraph_spacing: 0
                text_case: 'none'
            }
        }
    }
    border: {
        radius: {
            sm: '0.125rem'
            md: '0.25rem'
            lg: '0.5rem'
            circle: '8rem'
        }
        width: {
            sm: '0.0625rem'
            md: '0.125rem'
            lg: '0.1875rem'
            xl: '0.5rem'
        }
    }
    grid: {
        breakpoint: {
            xs: {
                min: '0rem'
                max: '20rem'
            }
            sm: {
                min: '20.0625rem'
                max: '42rem'
            }
            md: {
                min: '42.0625rem'
                max: '66rem'
            }
            lg: {
                min: '66.0625rem'
                max: '82rem'
            }
            xl: {
                min: '82.0625rem'
                max: '99rem'
            }
            xxl: {
                min: '99.0625rem'
                max: '117rem'
            }
        }
        padding: '1rem'
        margin: {
            none: '0rem'
            sm: '1rem'
            md: '1.5rem'
            lg: '2.5rem'
        }
    }
    sizes: {
        size_0: '0rem'
        size_1: '0.0625rem'
        size_2: '0.125rem'
        size_3: '0.1875rem'
        size_4: '0.25rem'
        size_5: '0.3125rem'
        size_6: '0.375rem'
        size_7: '0.4375rem'
        size_8: '0.5rem'
        size_10: '0.625rem'
        size_12: '0.75rem'
        size_14: '0.875rem'
        size_16: '1rem'
        size_18: '1.125rem'
        size_20: '1.25rem'
        size_24: '1.5rem'
        size_28: '1.75rem'
        size_32: '2rem'
        size_36: '2.25rem'
        size_40: '2.5rem'
        size_44: '2.75rem'
        size_48: '3rem'
        size_52: '3.25rem'
        size_56: '3.5rem'
        size_60: '3.75rem'
        size_64: '4rem'
        size_68: '4.25rem'
        size_72: '4.5rem'
        size_76: '4.75rem'
        size_80: '5rem'
        size_84: '5.25rem'
        size_88: '5.5rem'
        size_92: '5.75rem'
        size_96: '6rem'
        size_100: '6.25rem'
        size_104: '6.5rem'
        size_108: '6.75rem'
        size_112: '7rem'
        size_116: '7.25rem'
        size_120: '7.5rem'
        size_124: '7.75rem'
        size_128: '8rem'
    }
    z_index: {
        floating: 1050
        overlay: 1150
        drawer: 1200
        modal: 1300
        notification: 1400
        tooltip: 1500
    }
}

export { Theme }
export default Theme
