from django.conf import settings
from django.conf.urls import patterns, url
from django.conf.urls.static import static

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from backend import views

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', views.HomePage.as_view(), name='home'),

    # url(r'^$', 'collegechoice.views.home', name='home'),
    # url(r'^collegechoice/', include('collegechoice.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls'))

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
