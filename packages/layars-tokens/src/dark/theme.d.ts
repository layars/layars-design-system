type Theme = {
    meta: {
        name: 'dark'
    }
    color: {
        purple: {
            '100': '#F6EBFF'
            '150': '#EAD7FD'
            '200': '#DEC4FB'
            '250': '#D2B0F9'
            '300': '#C69DF8'
            '350': '#BA89F6'
            '400': '#AE75F4'
            '450': '#A262F2'
            '500': '#964EF0'
            '550': '#8A46DF'
            '600': '#7D3FCF'
            '650': '#7137BE'
            '700': '#652FAD'
            '750': '#58279C'
            '800': '#4C208C'
            '850': '#3F187B'
            '900': '#33106A'
        }
        blue: {
            '100': '#E0F2FF'
            '150': '#C6E2FD'
            '200': '#ACD2FA'
            '250': '#91C2F8'
            '300': '#77B3F5'
            '350': '#5DA3F3'
            '400': '#4393F0'
            '450': '#2883EE'
            '500': '#0E73EB'
            '550': '#0C6AD8'
            '600': '#0B60C5'
            '650': '#0957B2'
            '700': '#074DA0'
            '750': '#05448D'
            '800': '#043A7A'
            '850': '#023167'
            '900': '#002754'
        }
        green: {
            '100': '#D2F9E3'
            '150': '#B4EACF'
            '200': '#9BDCBE'
            '250': '#81CEAD'
            '300': '#67C09C'
            '350': '#4DB28B'
            '400': '#34A47A'
            '450': '#1A9669'
            '500': '#008858'
            '550': '#017D51'
            '600': '#037249'
            '650': '#046642'
            '700': '#055B3B'
            '750': '#065033'
            '800': '#08452C'
            '850': '#093924'
            '900': '#0A2E1D'
        }
        red: {
            '100': '#FFEBE7'
            '150': '#FBD3CE'
            '200': '#F8BBB6'
            '250': '#F4A39D'
            '300': '#F18C84'
            '350': '#ED746B'
            '400': '#E95C53'
            '450': '#E6443A'
            '500': '#E22C21'
            '550': '#D1271D'
            '600': '#C02119'
            '650': '#AF1C15'
            '700': '#9E1611'
            '750': '#8C110C'
            '800': '#7B0B08'
            '850': '#6A0604'
            '900': '#590000'
        }
        orange: {
            '100': '#FFEED1'
            '150': '#F7D9B3'
            '200': '#F0C799'
            '250': '#E8B480'
            '300': '#E1A266'
            '350': '#D98F4D'
            '400': '#D17C33'
            '450': '#CA6A1A'
            '500': '#C25700'
            '550': '#B34F00'
            '600': '#A44800'
            '650': '#863801'
            '700': '#863801'
            '750': '#763001'
            '800': '#672901'
            '850': '#582101'
            '900': '#491901'
        }
        seafoam: {
            '100': '#CEF7F3'
            '150': '#B4E9E5'
            '200': '#9BDBD6'
            '250': '#81CCC8'
            '300': '#67BEBA'
            '350': '#4DB0AB'
            '400': '#34A29D'
            '450': '#1A938E'
            '500': '#008580'
            '550': '#027A75'
            '600': '#056F6B'
            '650': '#076460'
            '700': '#095956'
            '750': '#0B4D4B'
            '800': '#0E4240'
            '850': '#103736'
            '900': '#122C2B'
        }
        grey: {
            '100': '#EBEEF1'
            '150': '#DBDFE4'
            '200': '#CAD1D7'
            '250': '#BAC2CA'
            '300': '#AAB3BD'
            '350': '#99A4AF'
            '400': '#8996A2'
            '450': '#788795'
            '500': '#687888'
            '550': '#5F6E7E'
            '600': '#556573'
            '650': '#4C5B69'
            '700': '#42515F'
            '750': '#394754'
            '800': '#2F3E4A'
            '850': '#26343F'
            '900': '#1C2A35'
        }
        solid: {
            '100': '#FFFFFF'
            '200': '#080E12'
        }
        action: {
            brand: {
                enabled: '#AE75F4'
                hover: '#BA89F6'
                focus: '#AE75F4'
                pressed: '#C69DF8'
                depressed: '#DEC4FB'
                subtle: {
                    enabled: '#964EF014'
                    hover: '#964EF01F'
                    focus: '#964EF014'
                    pressed: '#964EF029'
                    depressed: '#964EF066'
                }
            }
            accent: {
                enabled: '#34A29D'
                hover: '#4DB0AB'
                focus: '#34A29D'
                pressed: '#67BEBA'
                depressed: '#9BDBD6'
                subtle: {
                    enabled: '#00858014'
                    hover: '#0085801F'
                    focus: '#00858014'
                    pressed: '#00858029'
                    depressed: '#00858066'
                }
            }
            destructive: {
                enabled: '#E95C53'
                hover: '#ED746B'
                focus: '#E95C53'
                pressed: '#F18C84'
                depressed: '#F8BBB6'
                subtle: {
                    enabled: '#E22C2114'
                    hover: '#E22C211F'
                    focus: '#E22C2114'
                    pressed: '#E22C2129'
                    depressed: '#E22C2166'
                }
            }
            neutral: {
                enabled: '#8996A2'
                hover: '#99A4AF'
                focus: '#8996A2'
                pressed: '#AAB3BD'
                depressed: '#CAD1D7'
                subtle: {
                    enabled: '#68788814'
                    hover: '#6878881F'
                    focus: '#68788814'
                    pressed: '#68788829'
                    depressed: '#68788866'
                }
            }
            inverse: {
                enabled: '#080E12'
                hover: '#1C2A35'
                focus: '#080E12'
                pressed: '#26343F'
                depressed: '#394754'
                subtle: {
                    enabled: '#00000014'
                    hover: '#0000001F'
                    focus: '#00000014'
                    pressed: '#0000001F'
                    depressed: '#00000066'
                }
            }
        }
        border: {
            default: '#556573'
            strong: '#8996A2'
            subtle: '#26343F'
            inverted: '#8996A2'
            brand: {
                strong: '#BA89F6'
                subtle: '#7D3FCF'
            }
            accent: {
                strong: '#4DB0AB'
                subtle: '#056F6B'
            }
            information: {
                strong: '#5DA3F3'
                subtle: '#0B60C5'
            }
            positive: {
                strong: '#4DB28B'
                subtle: '#037249'
            }
            warning: {
                strong: '#D98F4D'
                subtle: '#A44800'
            }
            negative: {
                strong: '#ED746B'
                subtle: '#C02119'
            }
        }
        content: {
            primary: '#EBEEF1'
            secondary: '#BAC2CA'
            tertiary: '#8996A2'
            inverted: {
                primary: '#1C2A35'
                secondary: '#42515F'
                tertiary: '#687888'
            }
            brand: {
                primary: '#EAD7FD'
                secondary: '#AE75F4'
            }
            accent: {
                primary: '#B4E9E5'
                secondary: '#34A29D'
            }
            information: {
                primary: '#C6E2FD'
                secondary: '#4393F0'
            }
            positive: {
                primary: '#B4EACF'
                secondary: '#34A47A'
            }
            warning: {
                primary: '#F7D9B3'
                secondary: '#D17C33'
            }
            negative: {
                primary: '#FBD3CE'
                secondary: '#E95C53'
            }
        }
        disabled: {
            surface: '#1C2A35'
            border: '#1C2A35'
            content: '#42515F'
            inverse: {
                surface: '#CAD1D7'
                border: '#CAD1D7'
                content: '#8996A2'
            }
        }
        elevation: {
            '100': '#0D1216'
            '200': '#11171B'
            '300': '#161B1F'
            '400': '#1A2024'
            '500': '#1F2428'
        }
        focus: {
            default: '#0B60C5'
        }
        surface: {
            default: '#080E12'
            strong: '#99A4AF'
            muted: '#42515F'
            subtle: '#1C2A35'
            inverted: '#FFFFFF'
            brand: {
                strong: '#BA89F6'
                muted: '#7137BE'
                subtle: '#33106A'
            }
            accent: {
                strong: '#4DB0AB'
                muted: '#076460'
                subtle: '#122C2B'
            }
            information: {
                strong: '#5DA3F3'
                muted: '#0957B2'
                subtle: '#002754'
            }
            positive: {
                strong: '#4DB28B'
                muted: '#046642'
                subtle: '#0A2E1D'
            }
            warning: {
                strong: '#D98F4D'
                muted: '#863801'
                subtle: '#491901'
            }
            negative: {
                strong: '#ED746B'
                muted: '#AF1C15'
                subtle: '#590000'
            }
        }
    }
    sizes: {
        size_0: '0rem'
        size_1: '0.0625rem'
        size_2: '0.125rem'
        size_3: '0.1875rem'
        size_4: '0.25rem'
        size_6: '0.375rem'
        size_8: '0.5rem'
        size_10: '0.625rem'
        size_12: '0.75rem'
        size_14: '0.875rem'
        size_16: '1rem'
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
        desktop: {
            radius: {
                '100': '0.125rem'
                '200': '0.25rem'
                '300': '0.5rem'
                'circle': '5000rem'
                'none': '0rem'
            }
            spacing: {
                '100': '0.125rem'
                '200': '0.25rem'
                '300': '0.5rem'
                '400': '0.75rem'
                '500': '1rem'
                '600': '1.5rem'
                '700': '2rem'
                '800': '2.5rem'
                '900': '3rem'
                '1000': '4rem'
                '1100': '5rem'
                '1200': '6rem'
            }
        }
        mobile: {
            radius: {
                '100': '0.125rem'
                '200': '0.25rem'
                '300': '0.5rem'
                'circle': '5000rem'
                'none': '0rem'
            }
            spacing: {
                '100': '0.125rem'
                '200': '0.25rem'
                '300': '0.5rem'
                '400': '0.75rem'
                '500': '1rem'
                '600': '1.5rem'
                '700': '2rem'
                '800': '2.5rem'
                '900': '3rem'
                '1000': '4rem'
                '1100': '5rem'
                '1200': '6rem'
            }
        }
    }
    elevation: {
        '100': [
            '0px 1px 1px 0px rgba(0, 0, 0, 0.14)',
            '0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
            '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
        ]
        '200': [
            '0px 2px 2px 0px rgba(0, 0, 0, 0.14)',
            '0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
            '0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
        ]
        '300': [
            '0px 3px 4px 0px rgba(0, 0, 0, 0.14)',
            '0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
            '0px 1px 8px 0px rgba(0, 0, 0, 0.2)',
        ]
        '400': [
            '0px 4px 5px 0px rgba(0, 0, 0, 0.14)',
            '0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
            '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        ]
        '500': [
            '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
            '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            '0px 3px 5px -1px rgba(0, 0, 0, 0.2)',
        ]
        'z_index': {
            '100': 1050
            '200': 1150
            '300': 1200
            '400': 1300
            '500': 1400
            '600': 1500
        }
    }
    typography: {
        font: {
            family: 'Dosis, Roboto, helvetica, arial, sans-serif'
            weight: {
                bold: 600
                regular: 400
            }
        }
        display: {
            xl: {
                'font-size': '4.5rem'
                'font-weight': 'Medium'
                'line-height': '5rem'
                'letter-spacing': '0rem'
            }
            lg: {
                'font-size': '4rem'
                'font-weight': 'Medium'
                'line-height': '4.5rem'
                'letter-spacing': '0rem'
            }
            md: {
                'font-size': '3.5rem'
                'font-weight': 'Medium'
                'line-height': '4rem'
                'letter-spacing': '0rem'
            }
            sm: {
                'font-size': '3rem'
                'font-weight': 'Medium'
                'line-height': '3.5rem'
                'letter-spacing': '0rem'
            }
            xs: {
                'font-size': '2.5rem'
                'font-weight': 'Medium'
                'line-height': '3rem'
                'letter-spacing': '0rem'
            }
        }
        heading: {
            xxxl: {
                'font-size': '3rem'
                'font-weight': 'SemiBold'
                'line-height': '3.25rem'
                'letter-spacing': '0.125rem'
            }
            xxl: {
                'font-size': '2.5rem'
                'font-weight': 'SemiBold'
                'line-height': '2.75rem'
                'letter-spacing': '0.125rem'
            }
            xl: {
                'font-size': '2.25rem'
                'font-weight': 'SemiBold'
                'line-height': '2.5rem'
                'letter-spacing': '0.125rem'
            }
            lg: {
                'font-size': '2rem'
                'font-weight': 'SemiBold'
                'line-height': '2.25rem'
                'letter-spacing': '0.125rem'
            }
            md: {
                'font-size': '1.75rem'
                'font-weight': 'SemiBold'
                'line-height': '2rem'
                'letter-spacing': '0.125rem'
            }
            sm: {
                'font-size': '1.5rem'
                'font-weight': 'SemiBold'
                'line-height': '1.75rem'
                'letter-spacing': '0.125rem'
            }
            xs: {
                'font-size': '1.25rem'
                'font-weight': 'SemiBold'
                'line-height': '1.5rem'
                'letter-spacing': '0.125rem'
            }
            xxs: {
                'font-size': '1.125rem'
                'font-weight': 'SemiBold'
                'line-height': '1.5rem'
                'letter-spacing': '0.125rem'
            }
        }
        subtitle: {
            lg: {
                'font-size': '1.25rem'
                'font-weight': 'SemiBold'
                'line-height': '2rem'
                'letter-spacing': '0.3125rem'
            }
            md: {
                'font-size': '1.125rem'
                'font-weight': 'SemiBold'
                'line-height': '1.75rem'
                'letter-spacing': '0.3125rem'
            }
            sm: {
                'font-size': '1rem'
                'font-weight': 'SemiBold'
                'line-height': '1.5rem'
                'letter-spacing': '0.3125rem'
            }
            xs: {
                'font-size': '0.875rem'
                'font-weight': 'SemiBold'
                'line-height': '1.25rem'
                'letter-spacing': '0.3125rem'
            }
        }
        content: {
            lg: {
                'font-size': '1.25rem'
                'font-weight': 'Regular'
                'line-height': '2rem'
                'letter-spacing': '0.3125rem'
            }
            md: {
                'font-size': '1rem'
                'font-weight': 'Regular'
                'line-height': '1.5rem'
                'letter-spacing': '0.3125rem'
            }
            sm: {
                'font-size': '0.875rem'
                'font-weight': 'Regular'
                'line-height': '1.25rem'
                'letter-spacing': '0.3125rem'
            }
        }
        detail: {
            lg: {
                'font-size': '1rem'
                'font-weight': 'Regular'
                'line-height': '1.5rem'
                'letter-spacing': '0.3125rem'
            }
            md: {
                'font-size': '0.875rem'
                'font-weight': 'Regular'
                'line-height': '1.25rem'
                'letter-spacing': '0.3125rem'
            }
            sm: {
                'font-size': '0.75rem'
                'font-weight': 'Regular'
                'line-height': '1rem'
                'letter-spacing': '0.3125rem'
            }
            xs: {
                'font-size': '0.625rem'
                'font-weight': 'Regular'
                'line-height': '1rem'
                'letter-spacing': '0.3125rem'
            }
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
            xxxl: {
                min: '99.0625rem'
                max: '117rem'
            }
        }
        margin: {
            '100': '1rem'
            '200': '1.5rem'
            '300': '2.5rem'
            'none': '0rem'
        }
        padding: '1rem'
    }
}

export { Theme }
export default Theme
