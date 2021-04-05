<template>
  <sd-row dense>
    <sd-col
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
    >
      <sd-widget>
        <sd-widget-metric value="51" />
        <sd-widget-footer
          caption="Widget caption"
          footnote="Widget footnote"
        />
      </sd-widget>
    </sd-col>
    <sd-col
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
    >
      <sd-widget
        theme="primary"
      >
        <sd-widget-metric
          value="51"
          note="components"
        />
        <sd-widget-footer
          caption="Widget caption"
          footnote="Widget footnote"
        />
      </sd-widget>
    </sd-col>
    <sd-col
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
    >
      <sd-widget
        theme="primary"
      >
        <sd-widget-metric value="51" />
        <sd-widget-footer
          caption="Widget caption"
          footnote="Widget footnote"
        />
      </sd-widget>
    </sd-col>
    <sd-col
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
    >
      <sd-widget
        theme="primary"
        clickable
      >
        <sd-widget-metric value="51" />
        <sd-widget-footer
          caption="Widget caption"
          footnote="Widget footnote"
        />
      </sd-widget>
    </sd-col>
    <sd-col
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
    >
      <sd-widget>
        <sd-widget-metric value="51" />
        <sd-widget-footer
          caption="Widget caption"
          footnote="Widget footnote"
        />
      </sd-widget>
    </sd-col>
    <sd-col
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
    >
      <sd-widget>
        <sd-widget-metric value="51" />
        <sd-widget-footer
          caption="Widget caption"
          footnote="Widget footnote"
        />
      </sd-widget>
    </sd-col>
  </sd-row>
</template>
<script>
export default {
  name: 'WidgetDemo'
}
</script>
