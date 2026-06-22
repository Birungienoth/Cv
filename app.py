import streamlit as st

# --------------------------------------------------
# Page Configuration
# --------------------------------------------------

st.set_page_config(
    page_title="BM Takara Analytics",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --------------------------------------------------
# Sidebar
# --------------------------------------------------

st.sidebar.title("BM Takara Analytics")

page = st.sidebar.selectbox(
    "Navigation",
    [
        "🏠 Home",
        "📁 Projects",
        "📂 Upload Dataset",
        "📊 Analysis",
        "📈 Dashboard",
        "📋 Tables",
        "📄 Reports",
        "⚙ Settings"
    ]
)

# --------------------------------------------------
# Home Page
# --------------------------------------------------

if page == "🏠 Home":

    st.title("📊 BM Takara Analytics")

    st.markdown("### Personal Monitoring & Evaluation Analytics Assistant")

    st.divider()

    col1, col2, col3 = st.columns(3)

    with col1:
        st.metric("Projects", 0)

    with col2:
        st.metric("Datasets", 0)

    with col3:
        st.metric("Reports", 0)

    st.divider()

    st.success("Welcome!")

    st.write("""
This application will help you:

- Upload Excel datasets
- Perform data cleaning
- Generate descriptive statistics
- Produce dashboards
- Create report-ready tables
- Export reports
""")

elif page == "📁 Projects":

    st.title("Projects")

    st.info("Project management module coming next.")

elif page == "📂 Upload Dataset":

    st.title("Upload Dataset")

    st.info("Excel upload module coming next.")

elif page == "📊 Analysis":

    st.title("Analysis")

    st.info("Statistical analysis module coming soon.")

elif page == "📈 Dashboard":

    st.title("Dashboard")

    st.info("Dashboard module coming soon.")

elif page == "📋 Tables":

    st.title("Tables")

    st.info("Automatic tables module coming soon.")

elif page == "📄 Reports":

    st.title("Reports")

    st.info("Report generator coming soon.")

elif page == "⚙ Settings":

    st.title("Settings")

    st.info("Application settings coming soon.")
