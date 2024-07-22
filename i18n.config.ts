// i18n.config.ts


export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    en: {
      table: {
        created_at: 'Created At',
        documents_time: 'Documents Time',
        offload_permition_time: 'Offload Permission Time',
        offload_bulk_time_start: 'Offload Bulk Time Start',
        offload_bulk_time_end: 'Offload Bulk Time End',
        offload_ld_forward_time_start: 'Offload LD Forward Time Start',
        offload_ld_forward_time_end: 'Offload LD Forward Time End',
        offload_md_time_start: 'Offload MD Time Start',
        offload_md_time_end: 'Offload MD Time End',
        offload_ld_aft_time_start: 'Offload LD Aft Time Start',
        offload_ld_aft_time_end: 'Offload LD Aft Time End',
        id: 'ID',
        ramp_check_id: 'Ramp Check ID'
      },
      no_data: 'No arrival info data available for this ramp check.'
    },
    ru: {
      table: {
        created_at: 'Создано в',
        documents_time: 'Время документов',
        offload_permition_time: 'Время разрешения на разгрузку',
        offload_bulk_time_start: 'Начало времени разгрузки навалом',
        offload_bulk_time_end: 'Конец времени разгрузки навалом',
        offload_ld_forward_time_start: 'Начало времени разгрузки LD впереди',
        offload_ld_forward_time_end: 'Конец времени разгрузки LD впереди',
        offload_md_time_start: 'Начало времени разгрузки MD',
        offload_md_time_end: 'Конец времени разгрузки MD',
        offload_ld_aft_time_start: 'Начало времени разгрузки LD сзади',
        offload_ld_aft_time_end: 'Конец времени разгрузки LD сзади',
        id: 'ID',
        ramp_check_id: 'ID проверки на рампе'
      },
      no_data: 'Нет информации о прибытии для этой проверки на рампе.'
    }
  }
}));
