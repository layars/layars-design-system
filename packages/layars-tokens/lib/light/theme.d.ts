type Theme = {
    meta: {
        name: 'light'
    }
    color: {
        action: {
            primary: '#964ef0ff'
            primary_hover: '#8a46dfff'
            primary_pressed: '#7d3fcfff'
            primary_depressed: '#4c208cff'
            default: '#ffffffff'
            default_hover: '#ebeef1ff'
            default_pressed: '#dbdfe4ff'
            default_depressed: '#687888ff'
            critical: '#e22c21ff'
            critical_hover: '#d1271dff'
            critical_pressed: '#c02119ff'
            critical_depressed: '#7b0b08ff'
        }
        border: {
            default: '#8996a2ff'
            subdued: '#cad1d7ff'
            hover: '#99a4afff'
            depressed: '#4c5b69ff'
            error: '#e6443aff'
            error_subdued: '#f4a39dff'
            success: '#34a47aff'
            success_subdued: '#81ceadff'
            warning: '#d17c33ff'
            warning_subdued: '#e8b480ff'
            highlight: '#4393f0ff'
            highlight_subdued: '#91c2f8ff'
        }
        content: {
            default: '#1c2a35ff'
            subdued: '#556573ff'
            inverse: '#ffffffff'
            error: '#d1271dff'
            success: '#017d51ff'
            warning: '#b34f00ff'
            highlight: '#0c6ad8ff'
        }
        disabled: {
            surface: '#ebeef1ff'
            content: '#8996a2ff'
            border: '#dbdfe4ff'
        }
        elevation: {
            '100': '#ffffffff'
            '200': '#ffffffff'
            '300': '#ffffffff'
            '400': '#ffffffff'
            '500': '#ffffffff'
        }
        focused: {
            default: '#4393f0ff'
        }
        surface: {
            default: '#ffffffff'
            subdued: '#ebeef1ff'
            primary: '#dec4fbff'
            primary_subdued: '#f6ebffff'
            warning: '#f0c799ff'
            warning_subdued: '#ffeed1ff'
            error: '#f8bbb6ff'
            error_subdued: '#ffebe7ff'
            success: '#9bdcbeff'
            success_subdued: '#d2f9e3ff'
            highlight: '#acd2faff'
            highlight_subdued: '#e0f2ffff'
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
    elevation: {
        '100': '0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px 0px rgba(0, 0, 0, 0.20)'
        '200': '0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.20)'
        '300': '0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.20)'
        '400': '0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.20)'
        '500': '0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.20)'
    }
    border: {
        radius: {
            '100': '0.125rem'
            '200': '0.25rem'
            '300': '0.5rem'
            'circle': '8rem'
            'none': '0rem'
        }
        width: {
            '100': '0.0625rem'
            '200': '0.125rem'
            '300': '0.25rem'
            'none': '0rem'
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
    spacing: {
        '100': '0.125rem '
        '200': '0.25rem '
        '300': '0.5rem '
        '400': '0.75rem '
        '500': '1rem '
        '600': '1.5rem '
        '700': '2rem '
        '800': '2.5rem '
        '900': '3rem '
        '1000': '4rem '
        '1100': '5rem '
        '1200': '6rem '
    }
    font: {
        family: 'Dosis, Roboto, helvetica, sans-serif'
        weight: {
            regular: 400
            bold: 600
        }
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
